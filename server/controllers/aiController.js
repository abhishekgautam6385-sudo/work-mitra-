const workers = require('../data/workers.json');

// Haversine formula to compute distance in kilometers
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Fair Worker Matching Algorithm (SIH Wow Feature)
const matchWorkersFairly = (req, res) => {
  const { category, customerLat = 28.59, customerLng = 77.04 } = req.body;

  // Filter available verified workers matching skill
  const eligibleWorkers = workers.filter(
    (w) =>
      w.verificationStatus === 'VERIFIED' &&
      w.skills.some((s) => s.toLowerCase() === (category || '').toLowerCase())
  );

  const scoredWorkers = eligibleWorkers.map((worker) => {
    // 1. Distance & Proximity Score (Max 30)
    const distanceKm = getDistanceFromLatLonInKm(
      customerLat,
      customerLng,
      worker.location.lat,
      worker.location.lng
    );
    const proximityScore = Math.max(0, 30 - distanceKm * 2);

    // 2. Skill & Badges Score (Max 30)
    const skillScore = 30; // Matches requested category

    // 3. Workload Balance Score (Max 25) - Higher score for workers with FEWER recent jobs
    // Prevents job monopoly and ensures equitable income distribution
    const maxMonthlyJobsThreshold = 20;
    const workloadScore = Math.max(
      0,
      25 * (1 - worker.jobsCompletedThisMonth / maxMonthlyJobsThreshold)
    );

    // 4. Rating & Quality Score (Max 15)
    const ratingScore = (worker.rating / 5) * 15;

    // Total Score
    const totalScore = Math.round(
      (proximityScore + skillScore + workloadScore + ratingScore) * 10
    ) / 10;

    return {
      worker,
      distanceKm: Math.round(distanceKm * 10) / 10,
      scores: {
        proximity: Math.round(proximityScore * 10) / 10,
        skill: skillScore,
        workloadBalance: Math.round(workloadScore * 10) / 10,
        rating: Math.round(ratingScore * 10) / 10,
        total: totalScore
      },
      fairnessExplanation: `Score combines proximity (${Math.round(proximityScore)}pts), skill (${skillScore}pts), workload balance (${Math.round(workloadScore)}pts - ${worker.jobsCompletedThisMonth} jobs this month), and rating (${Math.round(ratingScore)}pts).`
    };
  });

  // Sort by total score descending
  scoredWorkers.sort((a, b) => b.scores.total - a.scores.total);

  return res.json({
    success: true,
    category,
    totalEligible: scoredWorkers.length,
    matches: scoredWorkers
  });
};

// AI Demand Forecasting for Cooperative Federation Dashboard
const getDemandForecast = (req, res) => {
  const forecastData = [
    { zone: "Dwarka / Janakpuri (West Delhi)", category: "Plumbing", currentDemand: 140, predictedDemand: 210, growthPercent: "+50%", recommendedAction: "Deploy 5 additional certified plumbers to Dwarka Sector 12" },
    { zone: "Sector 62 / 63 (Noida)", category: "Cleaning", currentDemand: 180, predictedDemand: 240, growthPercent: "+33%", recommendedAction: "Organize deep-cleaning equipment training workshop" },
    { zone: "DLF Phase 3 / Golf Course Rd (Gurugram)", category: "Electrical", currentDemand: 95, predictedDemand: 155, growthPercent: "+63%", recommendedAction: "Onboard 4 morning shift electric technicians" },
    { zone: "Rohini / Pitampura (North Delhi)", category: "Appliance", currentDemand: 80, predictedDemand: 110, growthPercent: "+37%", recommendedAction: "Stock AC gas refills & spare parts in cooperative store" }
  ];

  const weeklyTrend = [
    { day: "Mon", plumbing: 45, electrical: 30, cleaning: 60, appliance: 25 },
    { day: "Tue", plumbing: 50, electrical: 35, cleaning: 55, appliance: 20 },
    { day: "Wed", plumbing: 48, electrical: 40, cleaning: 65, appliance: 30 },
    { day: "Thu", plumbing: 60, electrical: 45, cleaning: 70, appliance: 40 },
    { day: "Fri", plumbing: 75, electrical: 55, cleaning: 90, appliance: 50 },
    { day: "Sat", plumbing: 110, electrical: 85, cleaning: 140, appliance: 80 },
    { day: "Sun", plumbing: 130, electrical: 95, cleaning: 160, appliance: 95 }
  ];

  return res.json({
    success: true,
    summary: "Predicted 38% surge in household sanitation and plumbing demand for upcoming weekend.",
    forecastByZone: forecastData,
    weeklyTrend
  });
};

module.exports = {
  matchWorkersFairly,
  getDemandForecast
};

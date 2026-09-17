const fs = require('fs');
const path = require('path');

const workersFilePath = path.join(__dirname, '../data/workers.json');
const servicesFilePath = path.join(__dirname, '../data/services.json');

const getWorkersData = () => {
  return JSON.parse(fs.readFileSync(workersFilePath, 'utf8'));
};

const saveWorkersData = (data) => {
  fs.writeFileSync(workersFilePath, JSON.stringify(data, null, 2), 'utf8');
};

const getServicesData = () => {
  return JSON.parse(fs.readFileSync(servicesFilePath, 'utf8'));
};

// GET all workers
const getAllWorkers = (req, res) => {
  const workers = getWorkersData();
  return res.json({ success: true, workers });
};

// GET services
const getAllServices = (req, res) => {
  const services = getServicesData();
  return res.json({ success: true, services });
};

// UPDATE worker KYC / Verification status (Admin function)
const updateVerificationStatus = (req, res) => {
  const { id } = req.params;
  const { status, badges } = req.body; // 'VERIFIED' or 'REJECTED'

  const workers = getWorkersData();
  const index = workers.findIndex((w) => w.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Worker not found' });
  }

  workers[index].verificationStatus = status;
  if (status === 'VERIFIED') {
    workers[index].insuranceActive = true;
    if (badges && Array.isArray(badges)) {
      workers[index].badges = Array.from(new Set([...workers[index].badges, ...badges]));
    } else {
      workers[index].badges.push('Verified Cooperative Member');
    }
  }

  saveWorkersData(workers);

  return res.json({
    success: true,
    message: `Worker verification status updated to ${status}`,
    worker: workers[index]
  });
};

// REGISTER new worker
const registerWorker = (req, res) => {
  const { name, nameHindi, phone, cooperative, skills, experienceYears, city, area } = req.body;

  const workers = getWorkersData();
  const newWorker = {
    id: `wrk-${Math.floor(100 + Math.random() * 900)}`,
    name: name || 'New Worker',
    nameHindi: nameHindi || name || 'नया कार्यकर्ता',
    phone: phone || '+91 90000 00000',
    cooperative: cooperative || 'Delhi Rural Skilled Workers Cooperative',
    skills: skills || ['Plumbing'],
    experienceYears: Number(experienceYears) || 1,
    rating: 5.0,
    totalReviews: 0,
    jobsCompletedThisMonth: 0,
    status: 'Available',
    verificationStatus: 'PENDING_VERIFICATION',
    badges: ['Newly Registered'],
    insuranceActive: false,
    welfareBalance: 0,
    location: {
      city: city || 'New Delhi',
      area: area || 'Karol Bagh',
      lat: 28.6518,
      lng: 77.1906
    }
  };

  workers.unshift(newWorker);
  saveWorkersData(workers);

  return res.json({
    success: true,
    message: 'Worker registered successfully! Submitted for Cooperative Verification.',
    worker: newWorker
  });
};

module.exports = {
  getAllWorkers,
  getAllServices,
  updateVerificationStatus,
  registerWorker
};

const fs = require('fs');
const path = require('path');

const bookingsFilePath = path.join(__dirname, '../data/bookings.json');
const workersFilePath = path.join(__dirname, '../data/workers.json');

const getBookingsData = () => {
  return JSON.parse(fs.readFileSync(bookingsFilePath, 'utf8'));
};

const saveBookingsData = (data) => {
  fs.writeFileSync(bookingsFilePath, JSON.stringify(data, null, 2), 'utf8');
};

const getWorkersData = () => {
  return JSON.parse(fs.readFileSync(workersFilePath, 'utf8'));
};

const saveWorkersData = (data) => {
  fs.writeFileSync(workersFilePath, JSON.stringify(data, null, 2), 'utf8');
};

// Generate random 4-digit OTP
const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();

// GET all bookings
const getAllBookings = (req, res) => {
  const bookings = getBookingsData();
  return res.json({ success: true, bookings });
};

// GET booking by ID
const getBookingById = (req, res) => {
  const { id } = req.params;
  const bookings = getBookingsData();
  const booking = bookings.find((b) => b.id === id);
  if (!booking) {
    return res.status(404).json({ success: false, message: 'Booking not found' });
  }
  return res.json({ success: true, booking });
};

// CREATE new booking
const createBooking = (req, res) => {
  const { customerName, customerPhone, customerAddress, serviceId, serviceName, category, amount, workerId, workerName, workerPhone } = req.body;

  const bookings = getBookingsData();
  const arrivalOtp = generateOTP();
  const departureOtp = generateOTP();

  const newBooking = {
    id: `BK-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    customerName: customerName || 'Rahul Gupta',
    customerPhone: customerPhone || '+91 98123 99887',
    customerAddress: customerAddress || 'H-12, Sector 15, Dwarka, New Delhi',
    serviceId: serviceId || 'srv-1',
    serviceName: serviceName || 'Plumbing & Pipe Fix',
    category: category || 'Plumbing',
    amount: amount || 350,
    cooperativeFee: Math.round((amount || 350) * 0.05 * 10) / 10,
    welfareFundContribution: 10,
    workerId: workerId || 'wrk-101',
    workerName: workerName || 'Rahul Sharma',
    workerPhone: workerPhone || '+91 98765 43210',
    status: 'ASSIGNED',
    arrivalOtp,
    departureOtp,
    scheduledTime: 'Immediate (20-30 Mins)',
    beforeWorkPhoto: null,
    afterWorkPhoto: null,
    createdAt: new Date().toISOString(),
    timeline: [
      {
        status: 'CREATED',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        note: 'Booking requested by customer'
      },
      {
        status: 'ASSIGNED',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        note: `Matched with ${workerName || 'Rahul Sharma'} via Fair Workload Algorithm`
      }
    ]
  };

  bookings.unshift(newBooking);
  saveBookingsData(bookings);

  return res.json({
    success: true,
    message: 'Booking created successfully!',
    booking: newBooking
  });
};

// VERIFY Arrival OTP (Transition from ASSIGNED -> IN_PROGRESS)
const verifyArrivalOtp = (req, res) => {
  const { id } = req.params;
  const { otp, photoUrl } = req.body;

  const bookings = getBookingsData();
  const index = bookings.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Booking not found' });
  }

  const booking = bookings[index];

  if (booking.arrivalOtp !== otp) {
    return res.status(400).json({ success: false, message: 'Invalid Arrival OTP. Please check with customer.' });
  }

  booking.status = 'IN_PROGRESS';
  booking.beforeWorkPhoto = photoUrl || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&auto=format&fit=crop';
  booking.timeline.push({
    status: 'IN_PROGRESS',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    note: 'Arrival OTP verified. Work started.'
  });

  bookings[index] = booking;
  saveBookingsData(bookings);

  return res.json({
    success: true,
    message: 'Arrival OTP verified successfully! Work is now IN PROGRESS.',
    booking
  });
};

// VERIFY Departure OTP (Transition from IN_PROGRESS -> COMPLETED)
const verifyDepartureOtp = (req, res) => {
  const { id } = req.params;
  const { otp, photoUrl } = req.body;

  const bookings = getBookingsData();
  const index = bookings.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Booking not found' });
  }

  const booking = bookings[index];

  if (booking.departureOtp !== otp) {
    return res.status(400).json({ success: false, message: 'Invalid Departure OTP. Please check with customer.' });
  }

  booking.status = 'COMPLETED';
  booking.afterWorkPhoto = photoUrl || 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&auto=format&fit=crop';
  booking.timeline.push({
    status: 'COMPLETED',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    note: 'Departure OTP verified. Work completed and payout released.'
  });

  bookings[index] = booking;
  saveBookingsData(bookings);

  // Update Worker's Welfare Balance & Job count
  const workers = getWorkersData();
  const workerIndex = workers.findIndex((w) => w.id === booking.workerId);
  if (workerIndex !== -1) {
    workers[workerIndex].jobsCompletedThisMonth += 1;
    workers[workerIndex].welfareBalance += booking.welfareFundContribution;
    saveWorkersData(workers);
  }

  return res.json({
    success: true,
    message: 'Work completed! Payment processed & welfare contribution credited.',
    booking
  });
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  verifyArrivalOtp,
  verifyDepartureOtp
};

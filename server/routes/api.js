const express = require('express');
const router = express.Router();

const { getAllServices, getAllWorkers, updateVerificationStatus, registerWorker } = require('../controllers/workerController');
const { getAllBookings, getBookingById, createBooking, verifyArrivalOtp, verifyDepartureOtp } = require('../controllers/bookingController');
const { matchWorkersFairly, getDemandForecast } = require('../controllers/aiController');

// Services & Workers Routes
router.get('/services', getAllServices);
router.get('/workers', getAllWorkers);
router.post('/workers/register', registerWorker);
router.patch('/workers/:id/verify', updateVerificationStatus);

// Bookings Routes & OTP Lifecycle
router.get('/bookings', getAllBookings);
router.get('/bookings/:id', getBookingById);
router.post('/bookings', createBooking);
router.post('/bookings/:id/verify-arrival', verifyArrivalOtp);
router.post('/bookings/:id/verify-departure', verifyDepartureOtp);

// AI & Algorithmic Engine Routes
router.post('/ai/fair-match', matchWorkersFairly);
router.get('/ai/demand-forecast', getDemandForecast);

module.exports = router;

const express = require('express');
const router = express.Router();
const { submitReport, getReports } = require('../controllers/reportController');
const auth = require('../middlewares/auth');

router.post('/', auth, submitReport);
router.get('/', auth, getReports);

module.exports = router;

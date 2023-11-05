const apiRoutes = require('./api');
const router = require('express').Router();
const homepageRoutes = require('./homepageRoutes');

// home and api route 
router.use('/', homeRoutes);
router.use('/', apiRoutes);

module.exports = router;
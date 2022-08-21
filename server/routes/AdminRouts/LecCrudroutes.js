const express = require('express')
const router = express.Router()
const LecController = require('../../controllers/AdminControlers/LecCrud.jsx');


router.post('/createLecture',LecController.LecCreate);

router.get('/getlecturer',LecController.LecGet);

// router.patch('/upadateAdminProfile',adminAuthController.upadateAdminProfile);

module.exports = router
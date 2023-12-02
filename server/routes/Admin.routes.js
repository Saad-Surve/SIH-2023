const express = require('express')
const router = express.Router()
const { getRequests,acceptLawyer } = require('../controllers/AdminController')
const { protectAdmin } = require('../middleware/authmiddleware')


router.get('/getRequests',protectAdmin,getRequests)
router.post('/acceptLawyer',protectAdmin,acceptLawyer)

module.exports = router
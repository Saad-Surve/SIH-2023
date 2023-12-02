const express = require('express')
const router = express.Router()
const { addHelp,acceptHelp,getAllHelp, getClientHelp,getAllLawyers } = require('../controllers/ClientController')
const { protectUser, protectLawyer, protectAdmin } = require('../middleware/authmiddleware')

router.post('/addHelp',protectUser,addHelp)
router.post('/acceptHelp',protectLawyer,acceptHelp)
router.get('/getAllHelp',protectLawyer,getAllHelp)
router.get('/getClientHelp',protectUser,getClientHelp)
router.get('/getAllLawyers',getAllLawyers)
module.exports = router
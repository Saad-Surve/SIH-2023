const express = require('express')
const router = express.Router()

const { registerUser, loginUser,registerLawyer,loginLawyer,registerAdmin,loginAdmin,checkUsernameUser } = require('../controllers/AuthController')

const { protectUser, protectLawyer, protectAdmin } = require('../middleware/authmiddleware')
const { uploadImage } = require('../utils/utils')

router.post('/registerLawyer',uploadImage.single('idProof'),registerLawyer)
router.post('/registerUser',registerUser)
router.post('/registerAdmin',registerAdmin)
router.post('/loginUser',loginUser)
router.post('/loginLawyer',loginLawyer)
router.post('/loginAdmin',loginAdmin)
router.get('/checkUsernameUser',checkUsernameUser)

module.exports = router
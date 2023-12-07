const express = require('express')
const router = express.Router()
const { getLawyer } = require('../controllers/searchController')
const { protectLawyer } = require('../middleware/authmiddleware')

router.put('/getLawyer',getLawyer)

module.exports = router
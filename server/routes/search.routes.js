const express = require('express')
const router = express.Router()
const { getLawyer,searchArticles} = require('../controllers/searchController')
const { protectLawyer } = require('../middleware/authmiddleware')

router.put('/getLawyer',getLawyer)
router.put('/searchArticles', searchArticles)

module.exports = router
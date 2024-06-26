const express = require('express')
const router = express.Router()
const { getLawyers,searchArticles} = require('../controllers/searchController')
const { protectLawyer } = require('../middleware/AuthMiddleware')

router.put('/getLawyers',getLawyers)
router.put('/searchArticles', searchArticles)

module.exports = router
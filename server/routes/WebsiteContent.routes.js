const express = require('express')
const router = express.Router()
const { getWebsiteContent,changeContent } = require('../controllers/WebsiteContentController')
const { protectUser, protectLawyer, protectAdmin } = require('../middleware/AuthMiddleware')

router.get('/getWebsiteContent',getWebsiteContent)
router.post('/changeContent',protectLawyer,changeContent)

module.exports = router
const express = require('express')
const router = express.Router()

const { getLawyerPosts,createArticle,createVideoPost } = require('../controllers/LawyerController')

const { protectUser, protectLawyer, protectAdmin } = require('../middleware/authmiddleware')
const { uploadThumbnail } = require('../utils/utils')

router.post('/createArticle',[protectLawyer,uploadThumbnail.single('thumbnail')],createArticle)
router.get('/getLawyerPosts',protectLawyer,getLawyerPosts)
router.post('/createVideoPost',[protectLawyer,uploadThumbnail.single('video')],createVideoPost)

module.exports = router
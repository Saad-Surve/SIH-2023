const jwt = require('jsonwebtoken');
const multer = require('multer')
const path = require('path')
const generateToken = (id) =>{
    return jwt.sign({ id },process.env.JWT_SECRET,{
        expiresIn:'1d'
    })
}
const fileStorage = multer.diskStorage({
    destination:'uploads/idProofs',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'_'+req.body.username+path.extname(file.originalname))
    }
})
const fileStorageThumbnail = multer.diskStorage({
    destination:'uploads/thumbnails',
    filename:(req,file,cb)=>{
        const filePath = file.fieldname+'_'+Date.now()+path.extname(file.originalname)
        req.thumbnailFileName = filePath
        cb(null,filePath)
    }
})

const fileStorageVideo = multer.diskStorage({
    destination:'uploads/videos',
    filename:(req,file,cb)=>{
        const filePath = file.fieldname+'_'+Date.now()+path.extname(file.originalname)
        req.videoFileName = filePath
        cb(null,filePath)
    }
})

const uploadImage = multer({
    storage:fileStorage,
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error('Please upload an image file'));
        }
        cb(undefined,true)
    }
})
const uploadThumbnail = multer({
    storage:fileStorageThumbnail,
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error('Please upload an image file'));
        }
        cb(undefined,true)
    }
})
const uploadVideo = multer({
    storage:fileStorageVideo,
    limits:{
        fileSize:10000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(mp4)$/)){
            return cb(new Error('Please upload an mp4 file'));
        }
        cb(undefined,true)
    }
})
module.exports = {
    generateToken,
    fileStorage,
    uploadImage,
    fileStorageThumbnail,
    uploadThumbnail,
    fileStorageVideo,
    uploadVideo
}
const jwt = require('jsonwebtoken');
const multer = require('multer')
const path = require('path')
const generateToken = (id) =>{
    return jwt.sign({ id },process.env.JWT_SECRET,{
        expiresIn:'1d'
    })
}
const fileStorage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'_'+req.body.username+path.extname(file.originalname))
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
module.exports = {
    generateToken,
    fileStorage,
    uploadImage
}
const WebsiteContent = require('../models/WebsiteContent.model')
const WebsiteChanges = require('../models/WebsiteChanges.model')

const asyncHandler = require('express-async-handler')

const getWebsiteContent = asyncHandler(async(req,res)=>{
    const { id } = req.query
    const content = await WebsiteContent.findOne({id:id})
    if(!content){
        res.status(200).json({'content':'Dummy Content'})
        return
    }
    res.status(200).json(content)
}
)

const changeContent = asyncHandler(async(req,res)=>{
    const { id,changes } = req.body
    const ogContent = await WebsiteContent.findOne({id:id})
    if(!ogContent){
        res.status(400).json({'message':'No content found'})
        return
    }
    const change = await WebsiteChanges.create({
        id:id,
        originalContent:ogContent.content,
        changedContent:changes
    })
    await change.save()
    res.status(200).json({'message':'Request to change content sent'})
})

module.exports = {
    getWebsiteContent,
    changeContent
}


const express=require('express')
const router=express.Router()
const {AddPocket, GetData, pocket}=require('../controller/cntrl.js')

router.post('/addpocket',AddPocket)
router.get('/getdata',GetData)
router.post('/pocket',pocket)

module.exports=router
const mongoose=require('mongoose')

const {Schema}=mongoose

const userSchema=new Schema({
    name:{
        type:String,

    },
    description:[
        {
            type:String
        }
    ]
},{
    timestamps:true
})



module.exports=mongoose.model('data',userSchema)
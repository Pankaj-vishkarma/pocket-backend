const userSchema=require('../schema/userSchema.js')

const AddPocket=async(req,res)=>{
  const {name,description}=req.body

  if(!name || !description){
    return res.status(200).json({
        success:false,
        message:"name and description is required"
    })
  }

  try{
       const Name_exits=await userSchema.findOne({name})

       if(Name_exits){
        return res.status(200).json({
            success:false,
            message:"Pocket name already exits"
        })
       }

       const user=await userSchema.create({name,description})

       if(!user){
        return res.status(200).json({
            success:false,
            message:"user not created"
        })
       }

       await user.save()

       return res.status(200).json({
        success:true,
        data:user
       })

  }catch(e){
    return res.status(400).json({
        success:false,
        message:e.message
    })
  }
}

const GetData=async(req,res)=>{
  try{
      const Data=await userSchema.find({})
      if(!Data){
        return res.status(200).json({
          success:false,
          message:"Data not found"
        })
      }

      return res.status(200).json({
        success:true,
        data:Data
      })
  }catch(e){
    return res.status(400).json({
      success:false,
      message:e.message
    })
  }
}

const pocket=async(req,res)=>{

   const {name}=req.body
   if(!name){
    return res.status(200).json({
      success:false,
      message:"name is required"
    })
   }
   try{
        const user=await userSchema.findOne({name})

        if(!user){
           return res.status(200).json({
            success:false,
            message:"user not found"
           })
        }
        
        return res.status(200).json({
          success:true,
          data:user
        })

   }catch(e){
    return res.status(400).json({
      success:false,
      message:e.message
    })
   }
}

module.exports={AddPocket,GetData,pocket}
const express =require("express")
const router=express.Router();


router.post("/add",(req,res)=>{
    console.log(req.body);
    res.json({message:"added successfully!"})
})


router.post("/delete",(req,res)=>{
    console.log(req.body);
    res.json({message:"deleted successfully!"})
})


router.post("/list",(req,res)=>{
    console.log(req.body);
    res.json({message:"fetched successfully!"})
})

module.exports=router;
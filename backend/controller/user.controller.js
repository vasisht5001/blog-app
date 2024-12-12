import { User } from "../models/user.model.js"
import { v2 as cloudinary } from 'cloudinary';
import bcrypt from 'bcrypt'
import createTokenAndSaveCookies from "../jwt/authToken.js"
export const register= async (req,res)=>{
   try {
    if(!req.files || Object.keys(req.files).length===0){
        return res.status(400).json({message:"user photo is required"})
    }
    const {photo}=req.files
    const allowedFormats = ["image/jpeg","image/png","image/webp"]
    if(!allowedFormats.includes(photo.mimetype)){
        return res.status(400).json({message:"invalid photo format. only jpg and png are allowed"})
    }

    const {email,name,password,phone,education,role}= req.body

if(!email || !name || !password || !phone || !education || !role || !photo){
    return res.status(400).json({message:"please fill the required fields"})
}
const user= await User.findOne({ email })
if(user){
    return res.status(400).json({ message:"User already exists with this email"})
}
const cloudinaryResponse= await cloudinary.uploader.upload(
    photo.tempFilePath
)
if(!cloudinaryResponse || cloudinaryResponse.error){
    console.log(cloudinaryResponse.error);
    
}
const hashedPassword =await bcrypt.hash(password,10)
const newUser= new User({
     email,
    name,
    password:hashedPassword,
    phone,
    education,
    role,
    photo:{
    public_id:cloudinaryResponse.public_id,
    url:cloudinaryResponse.url,
}, })
await newUser.save()
if(newUser){
    const token= await createTokenAndSaveCookies(newUser._id,res)
    console.log("signup:",token);
    
    res.status(201).json({message:"user registered successfully",newUser,token:token})
    
}
   } catch (error) {
    console.log(error);
    return res.status(500).json({ error:"interbal server error"})
    
   }
}










export const login=async (req,res)=>{
    const {email,password,role}=req.body
    try {
        if(!email || !password || !role){
            return res.status(400).json({ message:"please fill required fields"})
        }
        const user= await User.findOne({email}).select("+password")
        console.log(user);
        
        if(!user.password){
            return res.status(400).json({ message: "user password is missing"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"invalid email or password"})
        }
        if(user.role !==role){
            return res.status(400).json({message:`given role ${role} not found`})
        }
        const token= await createTokenAndSaveCookies(user._id, res)
        console.log("login:",token)
        res.status(200).json({message:"user logged in successfully",user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
        },
        token:token,
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"internal server error"})
        
    }
}


export const logout= (req,res)=>{
   try {
    res.clearCookie("jwt")
    res.status(200).json({message:"user logged out successfully"})
   } catch (error) {
    console.log(error);
    
    return res.status(500).json({error:"internal server error"})
   }
}


export const getMyProfile = async (req,res)=>{
    const user= await req.user
    res.status(200).json(user)
 }

 export const getAdmins= async (req,res)=>{
    const admin= await User.find({role:"admin"})
    res.status(200).json(admin)
 }














 
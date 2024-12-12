
import React from 'react'

const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register

// import axios from 'axios';
// import React, { useState } from 'react'
// import toast from 'react-hot-toast';
// import {data, Link} from 'react-router-dom'

// const Register = () => {
//   const [name,SetName]=useState("")
//   const [email,SetEmail]=useState("")
//   const [phone,SetPhone]=useState("")
//   const [password,SetPassword]=useState("")
//   const [role,SetRole]=useState("")
//   const [education,SetEducation]=useState("")
//   const [photo,SetPhoto]=useState("")
//   const [photoPreview,setPhotoPreview]=useState("")

// // function to get file
// const changePhotoHandler=(e)=>{
// console.log(e);
// const file=e.target.files[0]
// const reader= new FileReader()
// reader.readAsDataURL(file)
// reader.onload=()=>{
//   setPhotoPreview(reader.result)
//   SetPhoto(file)
// }
// }

// const handleRegister =async (e)=>{
// e.preventDefault()
// const formData=new FormData()
// formData.append('name',name)
// formData.append('email',email)
// formData.append('phone',phone)
// formData.append('password',password)
// formData.append('role',role)
// formData.append('education',education)
// formData.append('photo',photo)

// try{
//   const {data}=await axios.post('http://localhost:4001/api/users/register',formData,{headers:{"Content-Type":"multipart/form-data",}})
//   console.log(data);
//   toast.success(data.message ||'user registered successful')
// SetName("")
// SetEmail('')
// SetPhone("")
// SetPassword("")
// SetRole("")
// SetEducation("")
// SetPhoto("")
// setPhotoPreview("")
  
// }catch(error){
// console.log(error);
// toast.error(error.message || "please fill required fields")
// }
// }







//   return (
//     <div>
//       <div className='min-h-screen flex items-center justify-center bg-gray-100'>
//         <div className='w-full max-w-md bg-white shadow-md rounded-lg p-8'>
//           <form onSubmit={handleRegister}>
//           <div className='font-semibold text-xl items-center text-center '>
//       Cilli<span className='text-blue-500'>Blog</span>
//       </div>
//       <h1 className='text-xl font-semibold mb-6'>Register</h1>
//       <select value={role} onChange={(e)=>SetRole(e.target.value)} className='w-full p-2 mb-4 border rounded-md'>
//         <option  value="">Select role</option>
//         <option value="User ">User</option>
//         <option value="Admin ">Admin</option>
//       </select>
//       <div className='mb-4'>
//         <input type="text" placeholder='Your name'  value={name} onChange={(e)=>SetName(e.target.value)}  className='w-full p-2  border rounded-md'/>
//       </div>

//       <div className='mb-4'>
//         <input type="email" placeholder='email adress'  value={email} onChange={(e)=>SetEmail(e.target.value)} className='w-full p-2  border rounded-md'/>
//       </div>

//       <div className='mb-4'>
//         <input type="number" placeholder='Mobile number'  value={phone} onChange={(e)=>SetPhone(e.target.value)}  className='w-full p-2  border rounded-md'/>
//       </div>
//       <div className='mb-4'>
//         <input type="password" placeholder='Password'  value={password} onChange={(e)=>SetPassword(e.target.value)} className='w-full p-2  border rounded-md'/>
//       </div>

//       <select value={education} onChange={(e)=>SetEducation(e.target.value)} className='w-full p-2 mb-4 border rounded-md'>
//         <option value="">Education</option>
//         <option value="user ">graduate</option>
//         <option value="admin ">post graduate</option>
//       </select>
// <div className='flex items-center mb-4'>
//   <div className='photo size-20  mr-4'>
//   <img src={photoPreview?`${photoPreview}`:"photo"} alt="img" />
//   </div>
// <input type="file" onChange={changePhotoHandler} className='w-full p-2 border rounded-md' />
// </div>
//       <p className='text-center mb-4'>
//          Already registered ? {""}
//         <Link className='text-blue-600 '>Login now</Link>
//       </p>
//       <button type='submit' className='w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-lg text-white'>
//         Register</button>
//           </form>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default Register
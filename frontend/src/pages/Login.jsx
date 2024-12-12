
import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login


// // import React from 'react'
// import axios, { Axios } from 'axios';
// import React, { useState } from 'react'
// import toast from 'react-hot-toast';
// import { Link} from 'react-router-dom'

// const Login = () => {
  
//   const [email,SetEmail]=useState("")
 
//   const [password,SetPassword]=useState("")
//   const [role,SetRole]=useState("")

// const handleLogin =async (e)=>{
// e.preventDefault()


// if(!email || !password || !role){
//  toast.error("please fill all fields")
// }


// try{
//   const {data}=await axios.post
//   ('http://localhost:4001/api/users/login',{email,password,role},
//     {headers:{"Content-Type":"application/json"}})
//   console.log(data);
//   toast.success(data.message ||'user login successful')

// SetEmail('')

// SetPassword("")
// SetRole("")

  
// }catch(error){
// console.log(error);
// toast.error(error.message || "please fill required fields")
// }
// }

//   return (
//     <div>
//       <div className='min-h-screen flex items-center justify-center bg-gray-100'>
//         <div className='w-full max-w-md bg-white shadow-md rounded-lg p-8'>
//           <form onSubmit={handleLogin}>
//           <div className='font-semibold text-xl items-center text-center '>
//       Cilli<span className='text-blue-500'>Blog</span>
//       </div>
//       <h1 className='text-xl font-semibold mb-6'>Login</h1>
//       <select value={role} onChange={(e)=>SetRole(e.target.value)} className='w-full p-2 mb-4 border rounded-md'>
//         <option  value="">Select role</option>
//         <option value="User ">User</option>
//         <option value="Admin ">Admin</option>
//       </select>
      

//       <div className='mb-4'>
//         <input type="email" placeholder='email adress'  value={email} onChange={(e)=>SetEmail(e.target.value)} className='w-full p-2  border rounded-md'/>
//       </div>

      
//       <div className='mb-4'>
//         <input type="password" placeholder='Password'  value={password} onChange={(e)=>SetPassword(e.target.value)} className='w-full p-2  border rounded-md'/>
//       </div>

  
//       <p className='text-center mb-4'>
//          not registered yet ? {""}
//         <Link to={"/register"}className='text-blue-600 '>Register now</Link>
//       </p>
//       <button type='submit' className='w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-lg text-white'>
//         Login</button>
//           </form>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default Login
import React, { useContext  } from 'react'
import Navbar from '../src/components/Navbar.jsx'
import Home from '../src/components/Home.jsx'
import Footer from '../src/components/Footer.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import Blogs from '../src/pages/Blogs.jsx'
import About from '../src/pages/About.jsx'
import Contact from '../src/pages/Contact.jsx'
import Login from '../src/pages/Login.jsx'
import Register from '../src/pages/Register.jsx'
import Dashboard from '../src/pages/Dashboard.jsx'
// import { useAuth } from './context/AuthProvider.jsx'
import Creators from './pages/Creators.jsx'


import axios from 'axios'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'

const App = () => {

 const location = useLocation();
  const hideNavbarAndFooter = ["/dashboard","/login","/register"].includes(
    location.pathname
  );



// const {blogs}= useAuth()
// console.log(blogs);

const { blogs, isAuthenticated } = useAuth();
let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage to maininting the routes protect (Go to login.jsx)
console.log(blogs);
console.log(isAuthenticated); 


  return (
    <div>
   { !hideNavbarAndFooter && <Navbar/>}

   <Routes>

   <Route  path='/' element={ <Home/>} /> 
  <Route path='/blogs' element={ <Blogs/>} />
   <Route  path='/about' element={ <About/>} />
   <Route  path='/creators' element={ <Creators/>} />
   <Route  path='/contact' element={ <Contact/>} />
   <Route  path='/login' element={ <Login/>} />
   <Route  path='/register' element={ <Register/>} />
   <Route  path='/dashboard' element={ <Dashboard/>} />
   </Routes>
   <Toaster />
   
   { !hideNavbarAndFooter && <Footer/>} 
    </div>
  )
}

export default App









// import React, { useContext, useEffect, useState } from 'react';
// import Navbar from './components/Navbar.jsx';
// import Home from './components/Home.jsx';
// import Footer from './components/Footer.jsx';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Blogs from './pages/Blogs.jsx';
// import About from './pages/About.jsx';
// import Contact from './pages/Contact.jsx';
// import Login from './pages/Login.jsx';
// import Register from './pages/Register.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import Creators from './pages/Creators.jsx';
// import axios from 'axios';
// import { Toaster } from 'react-hot-toast';
// import { useAuth } from './context/AuthProvider.jsx';

// const App = () => {
//   const location = useLocation();
//   const hideNavbarAndFooter = ["/dashboard", "/login", "/register"].includes(
//     location.pathname
//   );

//   const { blogs } = useAuth();

//   // Check if blogs is undefined or empty
//   useEffect(() => {
//     if (blogs) {
//       console.log(blogs); // You can log blogs to confirm they are loaded
//     }
//   }, [blogs]);

//   // const {blogs}=useAuth()
//   // console.log(blogs);
  

//   return (
//     <div>
//       {!hideNavbarAndFooter && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/creators" element={<Creators />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//       <Toaster />
//       {!hideNavbarAndFooter && <Footer />}
//     </div>
//   );
// };

// export default App;

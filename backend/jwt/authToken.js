
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const createTokenAndSaveCookies = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "5d",
    
  });
  res.cookie("jwt", token, {
    httpOnly: true, // Temporarily set to false for testing
    secure: false,
    sameSite: "lax",
    path: "/", // Ensure the cookie is available throughout the site
  });
  await User.findByIdAndUpdate(userId, { token });
  console.log("authtoken-token:",token);
  
  return token;
};

export default createTokenAndSaveCookies;






// import express from 'express';
// import jwt from 'jsonwebtoken';
// import { User } from '../models/user.model.js'; // Adjust the path as needed
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();

// // Middleware to parse JSON
// app.use(express.json());

// // Function to create a token and save it in cookies
// const createTokenAndSaveCookies = async (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
//     expiresIn: '7d', // Token expires in 7 days
//   });

//   // Set the token as a secure HTTP-only cookie
//   res.cookie('jwt', token, {
//     httpOnly: true,
//     secure: true, // Requires HTTPS
//     sameSite: 'strict',
//   });

//   // Optionally save the token in the database (useful for token invalidation)
//   await User.findByIdAndUpdate(userId, { token });

//   return token;
// };

// // Example login route
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Authenticate user (dummy example, replace with actual authentication logic)
//     const user = await User.findOne({ email });
//     if (!user || user.password !== password) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Create token and save it in cookies
//     const token = await createTokenAndSaveCookies(user._id, res);

//     // Send response
//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// export default createTokenAndSaveCookies
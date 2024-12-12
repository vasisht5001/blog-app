import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  // const [profile, setProfile] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // const fetchProfile = async () => {
    //   try {
    //     // token should be let type variable because its value will change in every login. (in backend also)
    //     let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage (Go to login.jsx)
    //     console.log(token);
    //     if (token) {
    //       const { data } = await axios.get(
    //         "http://localhost:4001/api/users/my-profile",
    //         {
    //           withCredentials: true,
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //         }
    //       );
    //       console.log(data.user);
    //       setProfile(data.user);
    //       setIsAuthenticated(true);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    const fetchBlogs = async () => {
      try {
 // token should be let type variable because its value will change in every login. (in backend also)
 let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage (Go to login.jsx)
 console.log("token got in authprovider:",token);
        if(token){
        const { data } = await axios.get(
          "http://localhost:4001/api/blogs/all-blogs",{
         headers: {
           Authorization:`Bearer ${token}`,
           },
           withCredentials:true,
        });
        console.log("fetched blogs:",data);
        setBlogs(data);
      }else{
        console.log("no token found in local storage");
        setBlogs(null)
        
      }
      } catch (error) {
        console.log("error while fetching blogs",error);
        setBlogs(null)
      }
    };

    fetchBlogs();
    // fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        blogs,
       
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);












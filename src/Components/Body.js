import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import {onAuthStateChanged} from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utilis/userSlice"

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element: <Browse></Browse>
    }
  ]);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:"https://avatars.githubusercontent.com/u/138405475?u=5d412843f2f3ba782b3d2a76c692b28fee9e74d6&v=4"}));
    } else {
      dispatch(removeUser());
    }
  });
  
},[])

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body
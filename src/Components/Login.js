import React, { useState,useRef } from 'react'
import Header from './Header';
import { checkValidData } from '../utilis/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const name = useRef(null);

  const email = useRef(null);
  const password = useRef(null);
   
  const handleButtonClick = () =>{
    // Validate the form data
    const message = checkValidData(email.current.value,password.current.value)
    // console.log(email.current.value)
    // console.log(password.current.value)

    // console.log(message)

    setErrorMessage(message);
    if(message) return;
    // sign in and sign up user
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/138405475?u=5d412843f2f3ba782b3d2a76c692b28fee9e74d6&v=4"
    }).then(() => {

      const {uid, email,displayName,photoURL} = auth;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))

      navigate("/browser")
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
      // ...
    });
    
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });



    } 
    else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });


    }
  }
  const toggleSignInForm = () => {

    setIsSignInForm(!isSignInForm);
// 
  }
  

  
  return (
    <div>
      <Header></Header>
      <div className='absolute'>
      <img className='min-h-screen flex items-center justify-center' 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className ='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign in":"Sign Up"}</h1>

       {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />)}
        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg ' />
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>

        <p className='text-red-500 font-bold py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full' onClick={handleButtonClick}>{isSignInForm?"Sign in":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm?"New to Netflix? Sign Up":"Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;
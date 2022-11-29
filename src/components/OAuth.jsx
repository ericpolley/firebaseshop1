import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router';
export default function OAuth() {
  const navigate = useNavigate()
  async function onGoogleClick() {
try {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  const user = result.user

  // check for user

  const docRef = doc(db, "users", user.uid)
  const docSnap = await getDoc(docRef)

  if(!docSnap.exists()){
    await setDoc(docRef, {
      name: user.displayName,
      email: user.email,
      timestamp: serverTimestamp(),
    });
  }


  navigate("/");
  console.log(user)
} catch (error) {
  toast.error("Could not authorize with Google")
  console.log(error)
}
  }
  return (
   <>
   <button type="button" onClick={onGoogleClick} className="flex items-center justify-center w-full bg-red-700
    text-white px-7 py-3 uppercase hover:bg-red-800 active:bg-red-900
    hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded-lg">
   <FcGoogle className='bg-white rounded-full mr-2 w-7 h-7' />
    Continue with Google</button></>
  )
}

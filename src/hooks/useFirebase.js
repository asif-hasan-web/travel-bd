import React, { useEffect } from 'react'
import {
       getAuth,
       signInWithPopup,
       onAuthStateChanged,
       GoogleAuthProvider,
       signOut
       } from "firebase/auth";
import { useState } from 'react';
import firebaseInitialization from '../firebase/firebase.init';


firebaseInitialization()
const googleProvider=new GoogleAuthProvider()
const  auth = getAuth()

const useFirebase=()=>{
    
     const [user,setUser]= useState({})
    const [error,setError]= useState('')
    const [loading, setLoading] = useState(true);

//google Login in
    function signInWithGoogle(){
       return signInWithPopup(auth,googleProvider)
    }

    //get the curently log in user
    useEffect(() => {
      const unsubscribe= onAuthStateChanged(auth, (signedInUser) => {
         if (signedInUser) {
            setUser(signedInUser);
         } else {
           setUser({});
         }
         setLoading(false)
      });
      return () => unsubscribe;
    }, [])


    //sign out
    function logOut(){
      signOut(auth)
      .then((result) => {
         setUser({})
       }).catch((error) => {
         setError(error.message)
       });
    }


    return{
       signInWithGoogle,
        user,
        error,
        setUser,
       setError,
      loading,
      logOut
   }
}

export default useFirebase;

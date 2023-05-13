import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loader, setLoader] = useState(true)

    // sign up manually 
    const signUpWithManual = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login manually 
    const loginWithManual = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    

    // update profile 
    const updateAdditionalInfo = (dName, imgUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: dName,
            photoURL: imgUrl
        })
    }

    //logout
    const logout = () => {
        return signOut(auth)
    }

    // set observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser);
        })
        return () => {
            unsubscribe()
        }
    },[])
  const authInfo = {
    user,
    signUpWithManual,
    loginWithManual,
    updateAdditionalInfo,
    logout
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

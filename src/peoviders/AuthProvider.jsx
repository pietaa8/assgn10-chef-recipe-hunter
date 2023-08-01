import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,updateProfile, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null);
const auth=getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



      
    
    const createUser = (email, password, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            if (photoURL) {
              updateProfile(user, { photoURL: photoURL })
                .then(() => {
                  console.log("Profile photo updated successfully!");
                })
                .catch((error) => {
                  console.log("Error updating profile photo:", error);
                });
            }
            return userCredential;
          })
          .catch((error) => {
            console.log("Error creating user:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo={
        user,
        createUser,
        signIn,
        loading,
        logOut
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}


        </AuthContext.Provider>
    );
};

export default AuthProvider;
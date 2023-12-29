import { createContext, useContext, useEffect, useState } from "react";
import { db, firebaseAuth } from "../utils/firebase-config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"

import {setDoc, doc} from 'firebase/firestore'

const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [user, setUser] = useState({});

    const signUp = (email,password)=>{
        createUserWithEmailAndPassword(firebaseAuth, email,password);
        setDoc(doc(db,'users',email),{
            savedShows:[]
        })
    }

    const login = (email,password)=>{
        return signInWithEmailAndPassword(firebaseAuth,email,password);
    }

    const logout = ()=>{
        return signOut(firebaseAuth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(firebaseAuth,(currUser)=>{
            setUser(currUser);
        });

        return()=>{
            unsubscribe()
        }
    },[]);

    return(
        <AuthContext.Provider value={{signUp, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext);
}


import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCgKJWOTk6knTHQSnmCE-jaAopVmJxwFTw",
    authDomain: "react-netflix-clone-42008.firebaseapp.com",
    projectId: "react-netflix-clone-42008",
    storageBucket: "react-netflix-clone-42008.appspot.com",
    messagingSenderId: "38818607550",
    appId: "1:38818607550:web:a017ba5e34605da3e3c9ef",
    measurementId: "G-83W387M56T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app); 
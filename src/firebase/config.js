
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyCDzUBmGGDdKPJiHla9htKxwOm4aoCY5TA",
    authDomain: "accent-app-d1f43.firebaseapp.com",
    projectId: "accent-app-d1f43",
    storageBucket: "accent-app-d1f43.appspot.com",
    messagingSenderId: "927767518029",
    appId: "1:927767518029:web:b1f1bf8e317beb5a35b504"
};


const app = initializeApp(firebaseConfig);

export const initFirebase = () => app

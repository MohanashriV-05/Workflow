// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzMQKrAEd7TG_jgLYHr-CeHA1qJyQZkNE",
    authDomain: "playground-4daec.firebaseapp.com",
    databaseURL: "https://playground-4daec-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "playground-4daec",
    storageBucket: "playground-4daec.appspot.com",
    messagingSenderId: "628403105138",
    appId: "1:628403105138:web:45e270496f96ddfe9641eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 document.getElementById("register").addEventListener("click", registerUser);

function registerUser() {
    const rUsername = document.getElementById("username").value;
    const rPass=document.getElementById("password").value;
    console.log()
    createUserWithEmailAndPassword(auth, rUsername, rPass)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            console.log("success");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
            // ..
        });
}
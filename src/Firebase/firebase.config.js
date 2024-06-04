// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPF_M5MuLjbqSH7O0jiIjgXpOxe68kXcA",
    authDomain: "hompark.firebaseapp.com",
    projectId: "hompark",
    storageBucket: "hompark.appspot.com",
    messagingSenderId: "725021196529",
    appId: "1:725021196529:web:b52d21aa523e9ad0e52950"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
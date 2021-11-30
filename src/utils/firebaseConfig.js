// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHl0HCs2qAw5HuF7nrPKAJ1gnvZvQMlPE",
    authDomain: "roasterscoffeeshop.firebaseapp.com",
    projectId: "roasterscoffeeshop",
    storageBucket: "roasterscoffeeshop.appspot.com",
    messagingSenderId: "354835313813",
    appId: "1:354835313813:web:e910fb753081764b79179c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
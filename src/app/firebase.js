// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
// Your web app's Firebase configuration
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
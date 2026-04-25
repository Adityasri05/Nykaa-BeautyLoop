// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMORLrSfKjx8zDNbmWmyPNw5AOJgA--bY",
  authDomain: "nykaa-beautyloop.firebaseapp.com",
  databaseURL: "https://nykaa-beautyloop-default-rtdb.firebaseio.com",
  projectId: "nykaa-beautyloop",
  storageBucket: "nykaa-beautyloop.firebasestorage.app",
  messagingSenderId: "859652462402",
  appId: "1:859652462402:web:9829ecff213968ae945adb",
  measurementId: "G-GSTYN3YE4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);
const storage = getStorage(app);

export { app, auth, db, rtdb, storage, analytics };

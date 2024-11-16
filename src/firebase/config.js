import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAOFKdDd-hbIzOFsou0wLMOV7HNim2aikg",
  authDomain: "react-blog-79898.firebaseapp.com",
  projectId: "react-blog-79898",
  storageBucket: "react-blog-79898.firebasestorage.app",
  messagingSenderId: "51660371047",
  appId: "1:51660371047:web:871a617bcc5e5514af90c2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

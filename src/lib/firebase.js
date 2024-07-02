import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-66b4d.firebaseapp.com",
  projectId: "reactchat-66b4d",
  storageBucket: "reactchat-66b4d.appspot.com",
  messagingSenderId: "73112810213",
  appId: "1:73112810213:web:2f6889c9db485a82305a0c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
export default app;

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT9u9LbP2BALSXjDv0doHMK6PLuksrxgQ",
  authDomain: "blog-32dad.firebaseapp.com",
  projectId: "blog-32dad",
  storageBucket: "blog-32dad.appspot.com",
  messagingSenderId: "35120528311",
  appId: "1:35120528311:web:04c8763164b494e3378632",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

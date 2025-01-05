import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnFm7FV6SnrXgfsdSKtR9_TLBFONKJukE",
  authDomain: "note-app-c9870.firebaseapp.com",
  projectId: "note-app-c9870",
  storageBucket: "note-app-c9870.firebasestorage.app",
  messagingSenderId: "713516225277",
  appId: "1:713516225277:web:5d47692ad9713fdebce494",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
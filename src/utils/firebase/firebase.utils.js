import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkLJvdbPTO9X0E6oxJhYiiDt0w0XfaAuk",

  authDomain: "crwn-clothing-db-e0a47.firebaseapp.com",

  projectId: "crwn-clothing-db-e0a47",

  storageBucket: "crwn-clothing-db-e0a47.appspot.com",

  messagingSenderId: "910146561837",

  appId: "1:910146561837:web:a14754af060a742e9a95a4",

  measurementId: "G-H9Q72TCQL6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

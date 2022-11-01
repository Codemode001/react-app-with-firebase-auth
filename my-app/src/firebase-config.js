// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBZSC4WrhX7SHCcENCy5Thz9rfrMts-bJ4",
  authDomain: "react-firebase-4f50c.firebaseapp.com",
  projectId: "react-firebase-4f50c",
  storageBucket: "react-firebase-4f50c.appspot.com",
  messagingSenderId: "220176497597",
  appId: "1:220176497597:web:ab0fb210af5a6eeb2970d4",
  measurementId: "G-J8WDJ2561Y",
});

// export const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app);

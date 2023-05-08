import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoERaNOtyJ2lgu5qd6FJacV5OcLNo7iLk",
  authDomain: "fir-coder-2-a8716.firebaseapp.com",
  projectId: "fir-coder-2-a8716",
  storageBucket: "fir-coder-2-a8716.appspot.com",
  messagingSenderId: "626859634468",
  appId: "1:626859634468:web:4438a95408aeca61370db1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


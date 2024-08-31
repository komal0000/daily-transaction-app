// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAv_7K6iIM81yA5iqmI1iahZXsnaH-fsSk",
    authDomain: "daily-trasaction-app.firebaseapp.com",
    projectId: "daily-trasaction-app",
    storageBucket: "daily-trasaction-app.appspot.com",
    messagingSenderId: "417600182360",
    appId: "1:417600182360:web:f231674af54d559e3a522d"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

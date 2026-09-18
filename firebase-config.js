import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTXfY3u3pAmdU7LKUjVQkaQXnuj9Jnw_Y",
  authDomain: "atividade-extensionista-fa97a.firebaseapp.com",
  projectId: "atividade-extensionista-fa97a",
  storageBucket: "atividade-extensionista-fa97a.firebasestorage.app",
  messagingSenderId: "53659949490",
  appId: "1:53659949490:web:6407c77f52e01e20f06cab"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
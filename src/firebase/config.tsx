import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjoZlAF8mU0cNbyKGbMkCWy68IOUENkMY",
  authDomain: "queuingsystem-b3aff.firebaseapp.com",
  projectId: "queuingsystem-b3aff",
  storageBucket: "queuingsystem-b3aff.appspot.com",
  messagingSenderId: "450552772144",
  appId: "1:450552772144:web:6f597d4c3dfd0469c2dff5",
  measurementId: "G-2C3XBRJJXY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
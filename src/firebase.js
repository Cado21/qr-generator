import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB5xVujvrUnjSusZxJIMH27Tl6S-R7uTus",
  authDomain: "qr-code-generator-84e46.firebaseapp.com",
  projectId: "qr-code-generator-84e46",
  storageBucket: "qr-code-generator-84e46.firebasestorage.app",
  messagingSenderId: "1057803323154",
  appId: "1:1057803323154:web:b414a272afbbba513c15cb",
  measurementId: "G-014R1VQZY6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

function logVisit(pageName){
    alert('hi');

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyC96Z9qkeRAR7WvUWw5DU1TtyzTCcTleFU",
        authDomain: "swoarn-42f15.firebaseapp.com",
        projectId: "swoarn-42f15",
        storageBucket: "swoarn-42f15.appspot.com",
        messagingSenderId: "160746800472",
        appId: "1:160746800472:web:e713895be5611b1a28d12d",
        measurementId: "G-Q6896MT61Z"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    logEvent(analytics, `${pageName}_visited`);
}
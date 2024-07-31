import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBIqT1MozBzYi_hw5-DQDHdG4ioJVlw5cU",
    authDomain: "fir-auth-3d674.firebaseapp.com",
    projectId: "fir-auth-3d674",
    storageBucket: "fir-auth-3d674.appspot.com",
    messagingSenderId: "950333772284",
    appId: "1:950333772284:web:6eae9dc91e64ca7db82279",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

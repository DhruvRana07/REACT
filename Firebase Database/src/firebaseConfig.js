import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJA6PwgQuDB7rE16tNcuecOz3-rFixZaA",
    authDomain: "fir-database-11d28.firebaseapp.com",
    projectId: "fir-database-11d28",
    storageBucket: "fir-database-11d28.appspot.com",
    messagingSenderId: "481547220968",
    appId: "1:481547220968:web:534c92bd859700cd69565d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);
const signOutUser = () => signOut(auth);

export { auth, signInWithGoogle, signOutUser };

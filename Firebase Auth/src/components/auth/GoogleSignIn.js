import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
import '../styles/Auth.css'; 

const GoogleSignIn = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider); // Show success toast
      console.log('User signed in:', result.user);
    } catch (err) {
      toast.error('Error signing in with Google: ' + err.message);
      console.error(err.message);
    }
  };

  return (
    <div className="google-btn">
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};

export default GoogleSignIn;

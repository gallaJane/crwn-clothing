import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDlNTt4Q5C7aWmImDScXpPnMTMg0XNp14",
  authDomain: "crwn-db-460f0.firebaseapp.com",
  projectId: "crwn-db-460f0",
  storageBucket: "crwn-db-460f0.appspot.com",
  messagingSenderId: "1069218484506",
  appId: "1:1069218484506:web:347b75bdf58a513b5cdca3",
  measurementId: "G-YD3HRY8E3G"
};
 
// Initialize Firebase
initializeApp(firebaseConfig);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

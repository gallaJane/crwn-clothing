import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyDDlNTt4Q5C7aWmImDScXpPnMTMg0XNp14",
  authDomain: "crwn-db-460f0.firebaseapp.com",
  projectId: "crwn-db-460f0",
  storageBucket: "crwn-db-460f0.appspot.com",
  messagingSenderId: "1069218484506",
  appId: "1:1069218484506:web:347b75bdf58a513b5cdca3",
  measurementId: "G-YD3HRY8E3G"
};

 
const firebaseApp = initializeApp(firebaseConfig);
 
export const db = getFirestore(firebaseApp);
 
export const createUserProfileDocument = async (
  userAuth,
  additionalData = {}
) => {
  if (!userAuth) return;
 
  const userRef = doc(db, "users", `${userAuth.uid}`);
 
  const snapShot = await getDoc(userRef);
 
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
 
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
 
  return userRef;
};
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
 
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).catch((error) => console.log(error));
 
// export default firebase;
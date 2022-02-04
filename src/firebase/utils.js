import { auth } from "./config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Allows the user to sign in with Google Account
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      console.log(result.user);
      console.log(result.user.uid);
    })
    .catch((error) => {
      console.log(error);
    });
};

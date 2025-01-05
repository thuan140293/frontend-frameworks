import { signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { auth } from "@/firebase-config";

export const loginApi = async (email: string, password: string): Promise<User | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error", error);
    return null;
  }
};

export const logoutApi = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error", error);
  }
};
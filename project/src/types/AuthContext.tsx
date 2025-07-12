import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { createContext, useContext, useEffect, useState } from "react";
import type { User as AppUser, AuthContextType } from "../types"; // this is your User type

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadUserData = async (uid: string) => {
  const userDoc = await getDoc(doc(db, "users", uid));
  if (userDoc.exists()) {
    setUser(userDoc.data() as AppUser);
  } else {
    // fallback for users who signed up via Firebase but no Firestore doc yet
    const fallbackUser: AppUser = {
      id: uid,
      email: auth.currentUser?.email || '',
      name: auth.currentUser?.displayName || '',
      points: 100,
      isAdmin: false,
      avatar: '',
      joinedDate: new Date().toISOString(),
    };
    setUser(fallbackUser);
  }
};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        await loadUserData(firebaseUser.uid);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (email: string, password: string, name: string) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName: name });

      const userData: AppUser = {
        id: cred.user.uid,
        email,
        name,
        points: 100,
        isAdmin: false,
        joinedDate: new Date().toISOString(),
        avatar: "", // optional
      };

      await setDoc(doc(db, "users", cred.user.uid), userData);
      setUser(userData);
      return true;
    } catch (err) {
      console.error("Signup Error:", err);
      return false;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      await loadUserData(cred.user.uid);
      return true;
    } catch (err) {
      console.error("Login Error:", err);
      return false;
    }
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

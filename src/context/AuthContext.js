import { useContext, createContext, useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    // signInWithRedirect,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { useEffect } from "react";
import {auth} from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("User -> ", currentUser);
        });
        return () => {
            unsub();
        }
    }, [])

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    };

    const logout = () => {
        signOut(auth);
    }

    return (
        <AuthContext.Provider value={{ googleSignIn, logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}


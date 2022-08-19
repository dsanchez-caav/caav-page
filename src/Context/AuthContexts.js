import { useContext, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase"

const AuthContext = createContext();

export const AuthContextPrivider = ({ children }) => {

    const googleSingIn = () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            hd: "caav.com.co"
        });
        signInWithPopup(auth, provider)
    }

    return (
        <AuthContext.Provider value={{ googleSingIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}
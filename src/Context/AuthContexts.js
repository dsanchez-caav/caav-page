import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { auth } from "../Firebase/Firebase"

const AuthContext = createContext();

export const AuthContextPrivider = ({ children }) => {



    const [user, setUser] = useState({}); 

    const googleSingIn = () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            hd: "caav.com.co"
        });
        //signInWithPopup(auth, provider)
        signInWithRedirect(auth, provider)
    }

    const logOut = () => {
        signOut(auth) 
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            
        });
        return () => {
            unsuscribe();
        };
    }, []);



    return (
        <AuthContext.Provider value={{ googleSingIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}
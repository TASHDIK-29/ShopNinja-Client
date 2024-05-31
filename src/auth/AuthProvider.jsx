import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { app } from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import app from "./firebase.config";
// import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    // const axiosPublic = useAxiosPublic();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        console.log('from update', name, photo);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('Current user', currentUser);
            // if (currentUser) {
            //     setLoading(false);
            // }
        })

        return () => unsubscribe();
    }, [])


    // useEffect( () =>{
    //     const unsubscribe = onAuthStateChanged(auth, currentUser =>{
    //         setUser(currentUser);
    //         console.log('Current user', currentUser);

    //         if(currentUser){
    //             const userInfo = {email: currentUser.email}
    //             // Get token request
    //             axiosPublic.post('/jwt', userInfo)
    //             .then(res =>{
    //                 if(res.data.token){
    //                     localStorage.setItem('token', res.data.token);
    //                 }
    //                 setLoading(false);
    //             })
    //         }
    //         else{
    //             // Remove Token from cookie
    //             localStorage.removeItem('token');
    //             setLoading(false);
    //         }
    //         // setLoading(false);
    //     })

    //     return () => unsubscribe();
    // }, [axiosPublic])



    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        updateUserProfile,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
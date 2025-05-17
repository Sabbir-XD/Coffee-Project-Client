import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);

    // create a USER
    const handleCreateUser = (email, password) => {
       return createUserWithEmailAndPassword( auth, email, password);
    }

    // login a USER
    const handleLoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout a USER
    const handleLogoutUser = () => {
        return auth.signOut();
    }

    // oberserve user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User is signed in:', user);
                setUser(user);
            } else {
                console.log('No user is signed in.');
            }
        });
        return () => unsubscribe();
    }, []);

    const userInfo = {
        handleCreateUser,
        handleLoginUser,
        setUser,
        user,
        handleLogoutUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
import React, { useState, useEffect, useContext, createContext } from 'react';

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    // const Login ...
    // 
    // 
    // const logout ...
    //
    //

    useEffect(() => {
        // const unsubscribe = ...
        if (user) setUser(user)
        else setUser(false)
        // return () => unsubscribe();
    }, []);
}
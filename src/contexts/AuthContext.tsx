import { createContext, useContext, useEffect, useState } from "react";
import { AuthUser } from "./auth.types";
import Cookies from "js-cookie";

const AuthContext = createContext<AuthUser>({ id: 0, authToken: "", isAdmin: false });

export function AuthWrapper({ children }: { children: JSX.Element | JSX.Element[]}) {

    const [userData, setUserData] = useState<AuthUser>({id:0, isAdmin: false, authToken: ""})
    
    const authUserData = {
        id: 0,
        userData,
        setUserData
    }

    return (
        <AuthContext.Provider value={authUserData}>
            {children}
        </AuthContext.Provider>
    );

}

export function useAuthContext() {
    return useContext(AuthContext);
}

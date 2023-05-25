import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const GlobalContext = createContext<any>({});

export function GlobalWrapper({ children }: { children: JSX.Element | JSX.Element[]}) {

    const updateLocale = (current = "en") => {
        Cookies.set("lang", current)
    }

    const globalData = {
        updateLocale
    }

    return (
        <GlobalContext.Provider value={globalData}>
            {children}
        </GlobalContext.Provider>
    );

}

export function useGlobalContext() {
    return useContext(GlobalContext);
}

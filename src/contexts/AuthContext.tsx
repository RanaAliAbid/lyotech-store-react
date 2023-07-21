import { createContext, useContext, useEffect, useState } from 'react';
import { validateUserSession } from '@/services/auth/auth.service';
import Cookies from 'js-cookie';
// import { useRouter } from "next/router";
import moment, { locale } from 'moment';
import { useRouter } from 'next/router';
import { APP_HOST } from '../../app.config';

const AuthContext = createContext<any>({});

export function AuthWrapper({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {

  const router = useRouter();
  const [userConnected, setUserConnected] = useState<boolean>(false);
  const [connectedUserId, setConnectedUserId] = useState<string>("");
  const [connectedUserName, setConnectedUserName] = useState<string>("");
  const [connectedUserEmail, setConnectedUserEmail] = useState<string>("");
  const [connectedUser, setConnectedUser] = useState<any>(null);
  const [isChangePassword, setIsChangePassword] = useState<boolean>(false);

  const checkUserSession = async () => {
    const currentStatus = Cookies.get("userConnected");

    if (!currentStatus || currentStatus == "") return false;

    try {
      const result = await validateUserSession();

      const currentTime = Date.now();
      let tokeExpiredTime = parseInt(result?.data?.data?.exp) * 1000;
      if (tokeExpiredTime <= currentTime) {
        Cookies.remove("userConnected");
        Cookies.remove("tokenValidity");
        setUserConnected(false);
        setConnectedUserId("");
        timeoutCheckUserSession(0);
        setConnectedUserName("");
        setConnectedUserEmail("");
      } else {
        Cookies.set("userConnected", "true");
        Cookies.set("tokenValidity", `${tokeExpiredTime}`);
        setUserConnected(true);
        setConnectedUserId(result?.data?.data?.id ?? "");
        timeoutCheckUserSession(tokeExpiredTime ?? 0);
        setConnectedUserName(result?.data?.data?.name ?? "");
        setConnectedUserEmail(result?.data?.data?.email ?? "");
        setConnectedUser(result?.data?.data?.user);
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        Cookies.remove("userConnected");
        Cookies.remove("tokenValidity");
      }
      setUserConnected(false);
    }
  }

  const timeoutCheckUserSession = (expiredTime: number) => {
    if (expiredTime) {
      let timer = setInterval(() => {
        let currentTime = moment.now();
        if (expiredTime <= currentTime) {
          logout();
          clearInterval(timer);
          window.location.reload();
        }
      }, 3000)
    }
  }

  const login = () => {
    checkUserSession();
    Cookies.set("userConnected", "true");
    setUserConnected(true);
  }

  const logout = () => {
    Cookies.remove("userConnected");
    Cookies.remove("tokenValidity");
    setUserConnected(false);
    setConnectedUserId("");
    timeoutCheckUserSession(0);
    setConnectedUserName("");

    // const currentPath = btoa(APP_HOST + router.pathname);
    router.push(`/${router.locale}/auth/signin`) //?redirectTo=${currentPath}
  }

  useEffect(() => {
    checkUserSession();
  }, [userConnected])

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
  }, [router])

  const handleRouteChangeComplete = () => {
    const path = router.pathname
    if (!path.includes("/verify-email") && !path.includes("/forgot-password")) {
      // setIsChangePassword(false);
    }
  }

  return (
    <AuthContext.Provider value={
      {
        userConnected, setUserConnected,
        connectedUserId, setConnectedUserId,
        connectedUserName, setConnectedUserName,
        connectedUserEmail, setConnectedUserEmail,
        connectedUser, setConnectedUser,
        logout, login,
        checkUserSession,
        isChangePassword, setIsChangePassword
      }
    }>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

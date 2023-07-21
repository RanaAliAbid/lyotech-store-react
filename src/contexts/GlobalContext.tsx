import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {
  Backdrop,
  CircularProgress
} from '@mui/material';

const GlobalContext = createContext<any>({});
import { useRouter } from "next/router";
import { addToCart, getUserCart, removeCartProduct, updateCart } from '@/services/cart/cart.service';
import { priceSymbol } from '@/utils/app.utils';

export function GlobalWrapper({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const updateLocale = (current = 'en') => {
    Cookies.set('lang', current);
  };

  const router = useRouter();
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);
  const [cart, setCart] = useState<any>([]);
  const [currencySymbol, setCurrencySymbol] = useState<string>(".");
  const priceToFixed: number = 2;

  useEffect(() => {
    setCurrencySymbol(priceSymbol("euro"))
    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
  }, [])

  const handleRouteChange = () => {
    setGlobalLoading(true)
  }

  const handleRouteChangeComplete = () => {
    setGlobalLoading(false)
  }

  const deleteCart = async (id: string, qty: number) => {
    try {
      setGlobalLoading(true);
      const result = await removeCartProduct(id, qty);
      await getCart();
      setGlobalLoading(false);

      return result;
    } catch (error) {
      return null;
    }
  }

  const addCart = async (id: string, qty: number) => {
    try {
      setGlobalLoading(true);
      const result = await addToCart({
        productId: id,
        quantity: qty
      });
      await getCart();
      setGlobalLoading(false);

      return result;
    } catch (error) {
      return null;
    }
  }

  const getCart = async () => {
    try {
      const result = await getUserCart();
      setCart(result?.data?.data);

      return result?.data?.data ?? null;
    } catch (error) {
      setCart([]);
      return null;
    }
  }

  const updateCartOneCare = async (id: string, status: boolean = true) => {
    try {
      setGlobalLoading(true);
      const result = await updateCart({
        oneCare: {
          "productId": id,
          "purchase": status
        }
      });
      await getCart();
      setGlobalLoading(false);

      return result;
    } catch (error) {
      return null;
    }
  }

  const updateCartShippingMethod = async (id: string) => {
    try {
      setGlobalLoading(true);
      const result = await updateCart({
        shippingMethodId: id
      });
      await getCart();
      setGlobalLoading(false);

      return result;
    } catch (error) {
      return null;
    }
  }

  const globalData = {
    updateLocale,
    globalLoading, setGlobalLoading,
    cart, setCart, deleteCart, addCart, getCart,
    currencySymbol, setCurrencySymbol,
    priceToFixed,
    updateCartOneCare, updateCartShippingMethod
  };

  return (
    <GlobalContext.Provider value={globalData}>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 5 }}
        open={globalLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}

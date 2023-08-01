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
import AlertComponent from '../common/alert';
import { SweetAlertOptions } from 'sweetalert2';

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
  const [loadComponents, setLoadComponents] = useState<boolean>(false);
  const [homeProduct, setHomeProduct] = useState<any>(null);
  const [screenWitdh, setScreenWidth] = useState<number>(0);

  const [alertProps, setAlertProps] = useState<SweetAlertOptions & { show: boolean, callback?: any }>({ show: false });

  useEffect(() => {
    setCurrencySymbol(priceSymbol("euro"))
    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    if (window) {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResizeScreen);
  }, [])

  const handleResizeScreen = () => {
    setScreenWidth(window.innerWidth)
  }

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

      setAlertProps({
        show: true,
        title: "Your cart product has been added",
        text: "",
        toast: true,
        showConfirmButton: false,
        timerProgressBar: true,
        callback: closeAlert
      })

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

  const updateCartCountry = async (id: string) => {
    try {
      setGlobalLoading(true);
      const result = await updateCart({
        countryId: id
      });
      await getCart();
      setGlobalLoading(false);

      setAlertProps({
        show: true,
        title: "Your cart country has been updated",
        text: "",
        toast: true,
        showConfirmButton: false,
        timerProgressBar: true,
        callback: closeAlert
      })

      return result;
    } catch (error) {

      setAlertProps({
        show: true,
        title: "Can't add the product to your cart",
        text: "",
        toast: true,
        showConfirmButton: false,
        background: "#8B0000",
        timerProgressBar: true,
        callback: closeAlert
      })

      return null;
    }
  }

  const updateCartPaymentMethod = async (id: string) => {
    try {
      setGlobalLoading(true);
      const result = await updateCart({
        paymentMethodId: id
      });
      await getCart();
      setGlobalLoading(false);

      return result;
    } catch (error) {
      return null;
    }
  }

  const updateCartCoupon = async (code: string, apply: boolean = true) => {
    try {
      setGlobalLoading(true);
      const result = await updateCart({
        oneCare: {
          "code": code,
          "apply": apply
        }
      });
      await getCart();
      setGlobalLoading(false);

      setAlertProps({
        show: true,
        title: "Your coupon code has been applied",
        text: "",
        toast: true,
        showConfirmButton: false,
        timerProgressBar: true,
        callback: closeAlert
      })

      return result;
    } catch (error) {
      return null;
    }
  }

  useEffect(() => {
    cartFirstLoad();
  }, [router])

  const cartFirstLoad = async () => {
    const data: any = await getCart();
    if ((!data?.cart?.products || data?.cart?.products?.length == 0)
      && (router.pathname.startsWith("/checkout") || router.pathname.startsWith("/cart"))) {
      if (!router.pathname.includes("payment")) {
        router.push("/");
      } else {
        setLoadComponents(true);
      }
    } else {
      setLoadComponents(true);
    }
  }

  const closeAlert = () => {
    setAlertProps({
      show: false,
      title: "",
      text: ""
    })
  }

  const globalData = {
    updateLocale,
    globalLoading, setGlobalLoading,
    cart, setCart, deleteCart, addCart, getCart,
    currencySymbol, setCurrencySymbol,
    priceToFixed,
    updateCartOneCare, updateCartShippingMethod,
    updateCartCountry, updateCartPaymentMethod,
    updateCartCoupon,
    homeProduct, setHomeProduct,
    screenWitdh, setScreenWidth,
    alertProps, setAlertProps, closeAlert
  };

  return (
    <GlobalContext.Provider value={globalData}>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 5 }}
        open={globalLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {
        (loadComponents) && <AlertComponent {...alertProps}></AlertComponent>
      }

      {
        loadComponents && children
      }
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}

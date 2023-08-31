import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Backdrop, CircularProgress } from '@mui/material';

const GlobalContext = createContext<any>({});
import { useRouter } from 'next/router';
import {
  addToCart,
  getCartCurrencyRate,
  getUserCart,
  removeCartProduct,
  updateCart,
} from '@/services/cart/cart.service';
import { copyTextToClipboard, priceSymbol } from '@/utils/app.utils';
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

  const defaultCurrency = process.env.DEFAULT_CURRENCY ?? 'dirahm';

  const updateCurrency = (current = defaultCurrency) => {
    Cookies.set('currency', current);
  };

  const router = useRouter();
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);
  const [cart, setCart] = useState<any>([]);
  const [currencySymbol, setCurrencySymbol] = useState<string>('.');
  const [selectedCurrency, setSelectedCurrency] =
    useState<string>(defaultCurrency);
  const priceToFixed: number = 2;
  const [loadComponents, setLoadComponents] = useState<boolean>(false);
  const [homeProduct, setHomeProduct] = useState<any>(null);
  const [screenWitdh, setScreenWidth] = useState<number>(0);
  const [cartQtyProduct, setCartQtyProduct] = useState<any>(0);
  const [conversionRate, setConversionRate] = useState<number>(1);

  const [alertProps, setAlertProps] = useState<
    SweetAlertOptions & { show: boolean; callback?: any }
  >({ show: false });

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    const currentCurrency = Cookies.get('currency') ?? defaultCurrency;
    getCurrencyRate(currentCurrency);

    if (window) {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResizeScreen);
  }, []);

  const handleResizeScreen = () => {
    setScreenWidth(window.innerWidth);
  };

  const handleRouteChange = () => {
    setGlobalLoading(true);
  };

  const handleRouteChangeComplete = () => {
    setGlobalLoading(false);
  };

  const getCurrencyRate = async (name: string) => {
    try {
      setSelectedCurrency(name);
      setCurrencySymbol(priceSymbol(name));
      updateCurrency(name);

      if (name == 'euro') {
        setConversionRate(1);
        return;
      }

      const data = {
        currencyCode: name,
      };

      setGlobalLoading(true);
      const result = await getCartCurrencyRate(data);
      setConversionRate(result?.data?.data ?? 1);
      setGlobalLoading(false);

      return result;
    } catch (error) {
      setGlobalLoading(false);
      return null;
    }
  };

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
  };

  const addCart = async (id: string, qty: number) => {
    try {
      setGlobalLoading(true);
      const result = await addToCart({
        productId: id,
        quantity: qty,
      });
      await getCart();
      setGlobalLoading(false);

      setAlertProps({
        show: true,
        title: 'Your cart product has been added',
        text: '',
        toast: true,
        showConfirmButton: false,
        timerProgressBar: true,
        callback: closeAlert,
      });

      return result;
    } catch (error: any) {
      setAlertProps({
        show: true,
        title: error?.response?.data?.message,
        text: '',
        toast: true,
        background: '#8B0000',
        showConfirmButton: false,
        timerProgressBar: true,
        callback: closeAlert,
      });
      return null;
    }
  };

  const getCart = async () => {
    try {
      const result = await getUserCart();
      setCart(result?.data?.data);

      let count = 0;
      result?.data?.data?.cart?.products?.map((cartItem: any, index: any) => {
        count += cartItem?.quantity ?? 0;
        setCartQtyProduct(count);
      });

      return result?.data?.data ?? null;
    } catch (error) {
      setCart([]);
      return null;
    }
  };

  const updateCartOneCare = async (id: string, status: boolean = true) => {
    try {
      setGlobalLoading(true);
      const result = await updateCart({
        oneCare: {
          productId: id,
          purchase: status,
        },
      });
      await getCart();
      setGlobalLoading(false);

      return result;
    } catch (error) {
      return null;
    }
  };

  const updateCartShippingMethod = async (id: string) => {
    try {
      setGlobalLoading(true);
      const result = await updateCart({
        shippingMethodId: id,
      });
      await getCart();
      setGlobalLoading(false);

      return result;
    } catch (error) {
      return null;
    }
  };

  const updateCartCountry = async (id: string) => {
    try {
      setGlobalLoading(true);
      const result = await updateCart({
        countryId: id,
      });
      await getCart();
      setGlobalLoading(false);

      setAlertProps({
        show: true,
        title: 'Your cart country has been updated',
        text: '',
        toast: true,
        showConfirmButton: false,
        timerProgressBar: true,
        callback: closeAlert,
      });

      return result;
    } catch (error) {
      setAlertProps({
        show: true,
        title: "Can't add the product to your cart",
        text: '',
        toast: true,
        showConfirmButton: false,
        background: '#8B0000',
        timerProgressBar: true,
        callback: closeAlert,
      });

      return null;
    }
  };

  const updateCartPaymentMethod = async (id: string) => {
    try {
      setGlobalLoading(true);
      const result = await updateCart({
        paymentMethodId: id,
      });
      await getCart();
      setGlobalLoading(false);

      return result;
    } catch (error) {
      return null;
    }
  };

  const updateCartCoupon = async (code: string, apply: boolean = true) => {
    try {
      setGlobalLoading(true);
      const result = await updateCart({
        oneCare: {
          code: code,
          apply: apply,
        },
      });
      await getCart();
      setGlobalLoading(false);

      setAlertProps({
        show: true,
        title: 'Your coupon code has been applied',
        text: '',
        toast: true,
        showConfirmButton: false,
        timerProgressBar: true,
        callback: closeAlert,
      });

      return result;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    cartFirstLoad();
  }, [router]);

  const cartFirstLoad = async () => {
    const data: any = await getCart();

    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('s')?.toString() ?? null;

    if (
      (!!data?.cart?.products || data?.cart?.products?.length == 0) &&
      (router.pathname.startsWith('/checkout') ||
        router.pathname.startsWith('/cart'))
    ) {
      if (!router.pathname.includes('payment') && !sessionId) {
        router.push('/');
      } else {
        setLoadComponents(true);
      }
    } else {
      setLoadComponents(true);
    }
  };

  const closeAlert = () => {
    setAlertProps({
      show: false,
      title: '',
      text: '',
    });
  };

  const copyToClipboard = (text: string) => {
    if (copyTextToClipboard(text)) {
      setAlertProps({
        show: true,
        title: 'Your text has been copied to clipboard',
        text: '',
        toast: true,
        showConfirmButton: false,
        timerProgressBar: true,
        callback: closeAlert,
      });
    } else {
      setAlertProps({
        show: true,
        title: "Couldn't copy to clipboard",
        text: '',
        toast: true,
        background: '#8B0000',
        showConfirmButton: false,
        timerProgressBar: true,
        callback: closeAlert,
      });
    }
  };

  const globalData = {
    updateLocale,
    globalLoading,
    setGlobalLoading,
    cart,
    setCart,
    deleteCart,
    addCart,
    getCart,
    currencySymbol,
    setCurrencySymbol,
    priceToFixed,
    updateCartOneCare,
    updateCartShippingMethod,
    updateCartCountry,
    updateCartPaymentMethod,
    updateCartCoupon,
    homeProduct,
    setHomeProduct,
    screenWitdh,
    setScreenWidth,
    alertProps,
    setAlertProps,
    closeAlert,
    copyToClipboard,
    cartQtyProduct,
    setCartQtyProduct,
    getCurrencyRate,
    selectedCurrency,
    setSelectedCurrency,
    conversionRate,
  };

  return (
    <GlobalContext.Provider value={globalData}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 5 }}
        open={globalLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {loadComponents && <AlertComponent {...alertProps}></AlertComponent>}

      {loadComponents && children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}

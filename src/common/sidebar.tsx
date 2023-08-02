import * as React from 'react';
// import Head from 'next/head';
import { useRouter } from 'next/router';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import Link from '@mui/material/Link';

import OrderIcon from '../img/orderIcon.svg';
import WishlistIcon from '../img/wishlistIcon.svg';
import MapIcon from '../img/mapIcon.svg';
import PreferencesIcon from '../img/preferencesIcon.svg';
import TrackOrderIcon from '../img/trackOrderIcon.svg';
import UserIcon from '../img/userIcon.svg';

import Payments from '../img/digitalpayments.svg';

import styles from '@/styles/Home.module.css';

// import { Work_Sans } from 'next/font/google';
// const workSans = Work_Sans({ subsets: ['latin'] });

import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useAuthContext } from '@/contexts/AuthContext';
import { useGlobalContext } from '@/contexts/GlobalContext';

export default function Sidebar() {
  const router = useRouter();

  const { t } = useTranslation('common');
  const authContext = useAuthContext();
  const globalContext = useGlobalContext();

  return (
    <>
      <div className={styles.wrapTitle}>
        <Typography variant="h4">{t('My-Account')}</Typography>
      </div>

      <div className={styles.sideBar}>
        <div className={styles.userName}>
          <Typography variant="h6">{t('Welcome')}</Typography>

          <Typography variant="h4" className='text-capitalize text-ellipsis'>{authContext?.connectedUserName}</Typography>

          <p className='text-ellipsis'><Link href={'#'}>{authContext?.connectedUserEmail}</Link></p>
        </div>

        <Typography variant="h5" className={styles.listTitle}>
          {t('Navigation')}
        </Typography>

        <List className={styles.sideBarList}>
          <ListItem
            className={router.pathname == '/orders' ? styles.active : ''}
          >
            <Link href="/orders">
              <>
                <OrderIcon />
                {t('All-Orders')}
              </>
            </Link>
          </ListItem>
          <ListItem
            className={router.pathname == '/wishlist' ? styles.active : ''}
          >
            <Link href="/wishlist">
              <>
                <WishlistIcon />
                {t('Wishlist')}
              </>
            </Link>
          </ListItem>

          <ListItem
            className={router.pathname == '/trackorder' ? styles.active : ''}
          >
            <Link href="/trackorder">
              <>
                <TrackOrderIcon />
                {t('Track-Order')}
              </>
            </Link>
          </ListItem>
          <ListItem
            className={router.pathname == '/addresses' ? styles.active : ''}
          >
            <Link href="/addresses">
              <>
                <MapIcon />
                {t('Addresses')}
              </>
            </Link>
          </ListItem>

          <ListItem
            className={router.pathname == '/payments' ? styles.active : ''}
          >
            <Link href="/payments">
              <>
                <Payments />
                {t('Payments')}
              </>
            </Link>
          </ListItem>
        </List>

        <Typography variant="h5" className={styles.listTitle}>
          {t('Settings')}
        </Typography>

        <List>
          <ListItem
            className={router.pathname == '/profile' ? styles.active : ''}
          >
            <Link href="/profile">
              <>
                <UserIcon />
                {t('Profile')}
              </>
            </Link>
          </ListItem>
          {/* <ListItem
            className={router.pathname == '/preferences' ? styles.active : ''}
          >
            <Link href="#">
              <>
                <PreferencesIcon />
                {t('Preferences')}
              </>
            </Link>
          </ListItem> */}
        </List>
      </div>
    </>
  );
}

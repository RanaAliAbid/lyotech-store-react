import * as React from 'react';
import Typography from '@mui/material/Typography';
import styles from '@/styles/Home.module.css';
import useTranslation from 'next-translate/useTranslation';
import { Button, Checkbox, DialogActions, FormControlLabel, FormGroup, Modal } from '@mui/material';
import Cookies from 'js-cookie';

export default function CookiesComponent() {
    const { t } = useTranslation('common');

    const [open, setOpen] = React.useState(false);

    const [cookiesData, setCookiesData] = React.useState({
        marketing: true,
        personalization: true,
        analytics: true
    });

    const handleClickApprove = () => {

        Cookies.set('site-cookies', JSON.stringify(cookiesData));

        Cookies.set('site-cookies-status', 'true');

        setOpen(false);
    };

    const handleReject = () => {
        Cookies.set('site-cookies', JSON.stringify({
            marketing: false,
            personalization: false,
            analytics: false
        }));

        Cookies.set('site-cookies-status', 'false');

        setOpen(false);
    };

    React.useEffect(() => {
        const cookieStatus = Cookies.get('site-cookies-status');
        const cookieData = Cookies.get('site-cookies');

        if (cookieStatus == null || cookieData == null) {
            setOpen(true);
        }

        if (cookieStatus == "" || cookieData == "") {
            setOpen(true);
        }
    }, []);

    return (
        <>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <div className={styles.cookiesModal}>

                    <Typography variant='h4'>
                        Terms Consent
                    </Typography>

                    <Typography variant='h6'>
                        Our Website stores data such as cookies to enable essential site functionality as well as marketing, personalization and analytics. You may change your settings at any time or accept the default settings. We also have a comprehensive privacy policy which governs how we collect, use and protect your personal information. By clicking proceed you agree to be bound by our <a href="/privacy-policy" target="_blank" rel="noopener noreferer">Privacy and Cookies Policy.</a>.
                    </Typography>


                    <FormGroup className={styles.cookiesCheck}>
                        <FormControlLabel control={
                            <Checkbox
                                onChange={(e: any) => setCookiesData({ ...cookiesData, marketing: e.target.checked })}
                                checked={cookiesData.marketing} />} label="Marketing" />
                        <FormControlLabel control={
                            <Checkbox
                                onChange={(e: any) => setCookiesData({ ...cookiesData, personalization: e.target.checked })}
                                checked={cookiesData.personalization} />} label="Personalization" />
                        <FormControlLabel control={
                            <Checkbox
                                onChange={(e: any) => setCookiesData({ ...cookiesData, analytics: e.target.checked })}
                                checked={cookiesData.analytics} />} label="Analytics" />
                    </FormGroup>

                    <DialogActions className={styles.cookiesBtn}>
                        <Button variant="contained" className={`${styles['btn']} ${styles['btn_default']}`} onClick={handleReject}>Disagree</Button>
                        <Button variant="contained" className={`${styles['btn']} ${styles['btn_primary']}`} onClick={handleClickApprove}>
                            Agree
                        </Button>
                    </DialogActions>
                </div>
            </Modal>
        </>
    );
}

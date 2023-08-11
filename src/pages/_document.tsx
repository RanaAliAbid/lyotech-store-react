import { Html, Head, Main, NextScript } from 'next/document';

declare global {
  interface Window {
    PaymentSession: any;
    Checkout: any;
    Pss: any;
  }
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* <script src={`https://ap-gateway.mastercard.com/form/version/72/merchant/${process.env.MC_MERCHANT_ID}/session.js`}></script> */}
        <script
          src={
            'https://ap-gateway.mastercard.com/static/checkout/checkout.min.js'
          }
          data-error="errorCallback"
          data-cancel="https://api.lyotechlabs.com/cc_payment_webhook"
          data-timeout="https://api.lyotechlabs.com/cc_payment_webhook"
        ></script>
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

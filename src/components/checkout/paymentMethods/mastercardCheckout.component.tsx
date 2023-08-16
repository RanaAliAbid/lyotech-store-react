import { useGlobalContext } from '@/contexts/GlobalContext';
import * as React from 'react';

export default function MastercardCheckoutComponent({
  sessionId,
}: {
  sessionId: string;
}) {
  const globalContext = useGlobalContext();

  React.useEffect(() => {
    configureSession();
  }, [sessionId]);

  const configureSession = async () => {
    function errorCallback(error: any) {
      //   console.log(JSON.stringify(error));
    }
    function cancelCallback() {
      // console.log('Payment cancelled');
    }

    window.Checkout.configure({
      session: {
        id: sessionId,
      },
    });

    setTimeout(() => {
      sessionId && globalContext.setGlobalLoading(false);
      window.Checkout.showPaymentPage();
    }, 200);
  };

  return (
    <div style={{ display: 'none' }}>
      <div id="embed-target"> </div>
      <input
        type="button"
        value="Pay with Embedded Page"
        onClick={() => window.Checkout.showEmbeddedPage('#embed-target')}
      />
      <input
        type="button"
        value="Pay with Payment Page"
        onClick={() => window.Checkout.showPaymentPage()}
      />
    </div>
  );
}

import { Button } from '@mui/material';
import * as React from 'react';
import { useForm } from "react-hook-form";

export default function MastercardCheckoutComponent({ sessionId }: { sessionId: string }) {

    React.useEffect(() => {
        configureSession()
    }, [sessionId])

    const configureSession = async () => {
        function errorCallback(error: any) {
            console.log(JSON.stringify(error));
        }
        function cancelCallback() {
            console.log('Payment cancelled');
        }

        console.log("🚀 ~ file: mastercardCheckout.component.tsx:57 ~ configureSession ~ configureSession:=========================", sessionId)
        window.Checkout.configure({
            session: sessionId,
            interaction: {
                merchant: {
                    name: 'Your merchant name',
                    address: {
                        line1: '200 Sample St',
                        line2: '1234 Example Town'
                    }
                }
            }
        });

        setTimeout(() => {
            window.Checkout.showPaymentPage()
        }, 5000)
    }

    return (
        <div style={{ display: "none" }}>
            <div id="embed-target"> </div>
            <input type="button" value="Pay with Embedded Page" onClick={() => window.Checkout.showEmbeddedPage('#embed-target')} />
            <input type="button" value="Pay with Payment Page" onClick={() => window.Checkout.showPaymentPage()} />
        </div>
    );
}

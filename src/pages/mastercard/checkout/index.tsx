import { Button } from '@mui/material';
import * as React from 'react';
import { useForm } from "react-hook-form";

export default function MastercardSession({sessionId}:{sessionId: string}) {

    React.useEffect(() => {
        configureSession()
    }, [sessionId])

    const configureSession = async () => {
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
    }

    return (
        <>
            <div id="embed-target"> </div>
            <input type="button" value="Pay with Embedded Page" onClick={window.Checkout.showEmbeddedPage('#embed-target')} />
            <input type="button" value="Pay with Payment Page" onClick={window.Checkout.showPaymentPage()} />
        </>
    );
}

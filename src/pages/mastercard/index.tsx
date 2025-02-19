import { checkMasterCard3DSEnrollment, createMasterCardSession, updateMasterCardSession } from '@/services/mastercard/mastercard.services';
import * as React from 'react';

export default function MastercardSession() {

    const [sessionId, setSessionId] = React.useState<string>('SESSION0002703534560F85442791K1');

    React.useEffect(() => {
        // try {
        //     const createSession = async () => {
        //         const session = await createMasterCardSession()
        //         if (session?.data?.id) setSessionId(session?.data?.id)
        //     }
        //     createSession()
        // } catch (error) {
        //     console.log("error:", error)
        // }
    }, []);

    React.useEffect(() => {
        // updateSession()
        configureSession()
    }, [sessionId])

    const updateSession = async () => {
        const session = await updateMasterCardSession({ sessionId: sessionId, orderAmount: 1 }); // get from cart
        console.log("updateSession ~ session:", session)
    };

    const configureSession = async () => {
        window.PaymentSession.configure({
            session: sessionId,
            fields: {
                // ATTACH HOSTED FIELDS TO YOUR PAYMENT PAGE FOR A CREDIT CARD
                card: {
                    number: "#card-number",
                    securityCode: "#security-code",
                    expiryMonth: "#expiry-month",
                    expiryYear: "#expiry-year",
                    nameOnCard: "#cardholder-name"
                }
            },
            //SPECIFY YOUR MITIGATION OPTION HERE
            frameEmbeddingMitigation: ["javascript"],
            callbacks: {
                initialized: function (response: any) {
                    console.log("configureSession ~ response", response)
                    // HANDLE INITIALIZATION RESPONSE
                },
                formSessionUpdate: async function (response: any) {
                    // HANDLE RESPONSE FOR UPDATE SESSION
                    if (response.status) {
                        if ("ok" == response.status) {
                            console.log("Session updated with data: " + response.session.id);
                            const masterCard3DSEnrollment = await checkMasterCard3DSEnrollment({
                                sessionId: response.session.id,
                                orderAmount: 15,
                                orderId: '12354',
                                transactionId: '123',
                                orderDescription: 'string',
                                secureIdResponseUrl: 'http://10.101.12.196:3002/v1/mastercard-payment/3d-secure/process-payment',
                            });
                            if (masterCard3DSEnrollment) {
                                console.log(masterCard3DSEnrollment?.data?.data['3DSecure']?.veResEnrolled)
                            }
                            //check if the security code was provided by the user
                            if (response.sourceOfFunds.provided.card.securityCode) {
                                console.log("Security code was provided.");
                            }

                            //check if the user entered a Mastercard credit card
                            if (response.sourceOfFunds.provided.card.scheme == 'MASTERCARD') {
                                console.log("The user entered a Mastercard credit card.")
                            }
                        } else if ("fields_in_error" == response.status) {

                            console.log("Session update failed with field errors.");
                            if (response.errors.cardNumber) {
                                console.log("Card number invalid or missing.");
                            }
                            if (response.errors.expiryYear) {
                                console.log("Expiry year invalid or missing.");
                            }
                            if (response.errors.expiryMonth) {
                                console.log("Expiry month invalid or missing.");
                            }
                            if (response.errors.securityCode) {
                                console.log("Security code invalid.");
                            }
                        } else if ("request_timeout" == response.status) {
                            console.log("Session update failed with request timeout: " + response.errors.message);
                        } else if ("system_error" == response.status) {
                            console.log("Session update failed with system error: " + response.errors.message);
                        }
                    } else {
                        console.log("Session update failed: " + response);
                    }
                }
            },
            interaction: {
                displayControl: {
                    formatCard: "EMBOSSED",
                    invalidFieldCharacters: "REJECT"
                }
            }
        })
    }

    const pay = async (e: any) => {
        e.preventDefault();
        const res = await window.PaymentSession.updateSessionFromForm('card');
        console.log("pay ~ res:", res)
    }

    return (
        <>
            <form onSubmit={(e) => pay(e)}>
                <h3>Credit Card</h3>
                <input
                    id="card-number" placeholder="Card Number" readOnly={true} />
                <input
                    id="security-code" placeholder="Security Code" readOnly={true} />
                <input
                    id="expiry-month" placeholder="Expiry Month" readOnly={true} />
                <input
                    id="expiry-year" placeholder="Expiry Year" readOnly={true} />
                <input
                    id="cardholder-name" placeholder="Name on Card" readOnly={true} />
                <input type="submit" />
            </form>
        </>
    );
}

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( { price } ) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_rH8P23nxa348HLJedQdH3sSG00Qz8Sb3yT';
    const onToken = token => {
        console.log( token );
        alert( 'Payment Succesfull' );
    }

    return (
        <StripeCheckout
            label='Pay With Stripe'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={ `Your total is $${ price }` }
            amount={ priceForStripe }
            panelLabel='Pay With Stripe'
            token={ onToken }
            stripeKey={ publishableKey }
        />
    )
};

export default StripeCheckoutButton;
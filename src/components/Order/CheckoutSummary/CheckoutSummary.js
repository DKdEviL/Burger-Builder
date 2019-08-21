import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from '../CheckoutSummary/CheckoutSummary.css';

const CheckoutSummary = (props) => {
    console.log(props);
    return (
        <div className={classes.CheckoutSummary} >
            <h1> We hope it tastes good... </h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Danger"
                clicked={props.checkoutCancel}>CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContinue}>CONTINUE</Button>
        </div>
    );
}

export default CheckoutSummary;
import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Salad", type: 'salad', price: 10 },
    { label: "Bacon", type: 'bacon', price: 25 },
    { label: "Cheese", type: 'cheese', price: 5 },
    { label: "Meat", type: 'meat', price: 20 }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p> Total Price: <strong>₹ {props.price}</strong> </p>
        {
            controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label + ": ₹" + ctrl.price}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemove(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />
            ))
        }
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordering}
        >ORDER Now</button>
    </div>

);

export default buildControls;
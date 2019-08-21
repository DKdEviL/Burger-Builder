import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] updating...')
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey} >
                        <span style={{
                            textTransform: 'capitalize'
                        }}>
                            {igKey} </span>: {this.props.ingredients[igKey]} </li>);
            })

        return (
            <Aux>
                <h3> Your Order </h3>
                <p> A Delicious Burger with following Ingredients </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong> Total Price: ₹{this.props.price} </strong></p>
                <p> Continue to Checkout? </p>
                <Button
                    clicked={this.props.purchaseCancelled}
                    btnType="Danger">CANCEL</Button>
                <Button
                    clicked={this.props.purchaseContinued}
                    btnType="Success">CONTINUE</Button>
            </Aux>
            
        );
    }

};

export default OrderSummary;
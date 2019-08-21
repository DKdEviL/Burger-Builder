import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './contactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';



class contactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) =>{
      event.preventDefault();

      this.setState({ loading: true });

      const order = {
          ingredients: this.props.ingredients,
          price: this.props.price,
          customer: {
              name: 'Deepak',
              address: {
                  street: 'Test Street 1',
                  zipCode: '110015',
                  country: 'India'
              },
              email: 'test@test.com'
          },
          deliveryMethod: 'As Soon As Possible'
      }
      axios.post('/orders.json', order)
          .then(response => {
              this.setState({ loading: false });
              this.props.history.push('/');
          })
          .catch(error => {
              this.setState({ loading: false })
          });


      console.log(this.props.ingredients);
    }
    render() {
      let form = (
        <form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input} type="email" name="email" placeholder="Email" />
            <input className={classes.Input} type="text" name="street" placeholder="Street Address" />
            <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
      );
      if(this.state.loading){
        form = <Spinner />;
      }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Contact Details..</h4>
                {form}
            </div>
        );
    }
}

export default contactData;

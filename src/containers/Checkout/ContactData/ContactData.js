import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from './../../../axios-orders';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      city: '',
      country: '',
      street: '',
      zipCode: '',
    },
    loading: false,
  }
  orderHandler = (event) => {
    event.preventDefault();
    //console.log("this.props.ingredients", this.props.ingredients)
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Tigran",
        address: {
          street: 'M. Mashtoc',
          zipCode: 12345,
          city: 'Yerevan',
          country: 'Armenia'
        },
        email: 'tig.vardanyan.001@gmail.com'
      },
      deliveryMethod: 'fastest',
    }
    axios.post('/orders.json', order)
         .then(response => {
           //console.log('response', response)
           this.setState({loading: false})
           this.props.history.push('/')
         })
         .catch(error => {
           //console.log('error', error)
           this.setState({loading: false})
         })
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type="text" name={'name'} placeholder={'Your Name'}/>
        <input className={classes.Input} type="email" name={'email'} placeholder={'Your Email'}/>
        <input className={classes.Input} type="text" name={'city'} placeholder={'Your City'}/>
        <input className={classes.Input} type="text" name={'country'} placeholder={'Your Country'}/>
        <input className={classes.Input} type="text" name={'street'} placeholder={'Your Street'}/>
        <input className={classes.Input} type="number" name={'zipCode'} placeholder={'Your ZipCode'}/>
        <Button
          btnType={'Success'}
          clicked={this.orderHandler}
        >
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner/>
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
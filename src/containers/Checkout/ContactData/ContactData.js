import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name:'',
    email:'',
    address: {
      city:'',
      country:'',
      street:'',
      zipCode:'',
    }
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input className={classes.Input} type="text" name={'name'} placeholder={'Your Name'}/>
          <input className={classes.Input} type="email" name={'email'} placeholder={'Your Email'}/>
          <input className={classes.Input} type="text" name={'city'} placeholder={'Your City'}/>
          <input className={classes.Input} type="text" name={'country'} placeholder={'Your Country'}/>
          <input className={classes.Input} type="text" name={'street'} placeholder={'Your Street'}/>
          <input className={classes.Input} type="number" name={'zipCode'} placeholder={'Your ZipCode'}/>
          <Button btnType={'Success'}>Order</Button>
        </form>
      </div>
    )
  }
}

export default ContactData
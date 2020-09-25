import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from './../../../axios-orders';
import Input from '../../../components/UI/Input/Input'
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    orderForm: {
      //todo generate this objects with helper function
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'City'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {
              value: 'fastest',
              displayValue: 'Fastest'
            },
            {
              value: 'cheapest',
              displayValue: 'Cheapest'
            }
          ],
        },
        value: 'fastest',//todo my way,think how can optimize
        validation: {},
        valid: true,
        //validation: {
        //  required: true,
        //},
        //valid: false,
        //touched: false,
      },
    },
    formIsValid: false,
    loading: false,
  }
  orderHandler = (event) => {
    event.preventDefault();
    //console.log("this.props.ingredients", this.props.ingredients)
    this.setState({loading: true});
    //console.log("this.props.price", this.props.price)
    const formData = {};
    for (const formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData,
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
  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required && isValid) {
      isValid = value.trim() !== ''
    }
    if (rules.minLength && isValid) {
      isValid = value.length >= rules.minLength
    }
    if (rules.maxLength && isValid) {
      isValid = value.length <= rules.maxLength
    }
    return isValid;
  }
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }
    updatedFormElement.value = event.target.value;//.trim();
    // todo trim before send to server and before check avlidation, but save chance to write like "Anna Maria"
    updatedFormElement.valid =
      this.checkValidity(updatedFormElement.value,
        updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    //console.log(updatedFormElement.valid); //check valid or not
    let formIsValid = true;
    for (let inputIdentifiers in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifiers].valid && formIsValid
    }
    console.log('formIsValid',formIsValid);
    this.setState(
      {
        orderForm: updatedOrderForm,
        formIsValid: formIsValid
      }
    )
  }

  render() {
    const formElementsArray = [];
    for (const key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      })
    }
    //console.log('[ContactData] props')
    //console.log(this.props)
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button
          btnType={'Success'}
          disabled={!this.state.formIsValid}
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
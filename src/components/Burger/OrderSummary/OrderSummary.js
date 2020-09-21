import React, {Component} from 'react';
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Auxiliary'

class OrderSummary extends Component {
  //this could be a functional component, doesn't have to be a class
  //we change to see when call componentWillUpdate
  //componentWillUpdate(nextProps, nextState, nextContext) {
  //  console.log('[OrderSummary] componentWillUpdate')
  //}

  render() {
    const ingredientSummary =
      Object.keys(this.props.ingredients)
            .map(igKey => {
              return (
                <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                  {igKey}
                </span>:
                  {this.props.ingredients[igKey]}
                </li>
              )
            })
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingridients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: </strong>{this.props.price}</p>
        <p>Continue to checkout</p>
        <Button clicked={this.props.purchaseCancelled} btnType={"Danger"}>CANCEL</Button>
        <Button clicked={this.props.purchaseContinued} btnType={"Success"}>CONTINUE</Button>
      </Aux>
    );
  }
}

export default OrderSummary
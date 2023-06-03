import React, { Component } from 'react'
import './styles/card.css';



class Card extends Component {


  //this Constructor initialize these values
  constructor(props) {
    super(props)
    this.state = {
      amount: '1',
      name: 'placeHolder',
       price: 'placeHolder',
      category: 'placeHolder'
    }
  }


  HandleCounter(opreation) {

    //ensure no zeros
    if (this.amount !== 0 && opreation === true) {
      this.setState({
        amount: this.amount+1
      })
    }
      else if (this.amount !== 0 && opreation === false) {
        this.setState({
          amount: this.amount-1
        })
      }
     else {
      this.setState({
        amount: 1
      })
    }
  }


  render() {


    return (
      <div className="flexDIV">
        {/* <img src={img} alt="ProductPIC" className="image" /> */}

        <div className="ProductTEXT">
          <p>{this.state.name}</p>
          <span>{this.state.price}</span>
          <span>{this.state.category}</span>
        </div>

        <div className="Counter">
          <button onClick={()=> this.HandleCounter(true)} >+</button>
          <span>{this.state.amount}</span>
          <button onClick={()=> this.HandleCounter(false)} >-</button>
        </div>
      </div>
    );
  }
}
export default Card;
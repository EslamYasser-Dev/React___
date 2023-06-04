import React, { Component } from 'react'

import products from './ProductData'

class Card extends Component {


  //this Constructor initialize these values
  constructor(props) {
    super(props)
    this.state = {
      amount: 1,
      img:products.img,
      name: 'placeHolder',
      price: '542',
      category: 'placeHolder'
    }
  }


  // HandleCounter(opreation) {

  //   //ensure no zeros then add 
  //   if (this.amount !== 0 && opreation === true) {
  //     this.setState({
  //       amount: this.amount+1
  //     })
  //   }
  //     else if (this.amount !== 0 && opreation === false) {
  //       this.setState({
  //         amount: this.amount-1
  //       })
  //     }
  //    else {
  //     this.setState({
  //       amount: 1
  //     })
  //   }
  // }


  HandleCounterInc = () => {
    this.setState({
      amount: this.state.amount + 1
    })
  }

  HandleCounterDec = () => {
    this.setState({
      amount: this.state.amount - 1
    })
  }


  render() {


    return (
      <div className="flexDIV">
        <div style={{"color": "red", "backgroundColor": "#CCC9E7","width":"60vh","height":"70vh","margin":"1.5vh","borderRadius":"1vh"}}>
          <figure><img src={this.state.img} alt="imag" /></figure>
          <div className="card-body">
            <h2 className="card-title">{this.state.name}</h2>
            <p>{(this.state.price)+"$"}</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        <div className="Counter">
          <button onClick={() => this.HandleCounterInc()} > + </button>
          <span>{this.state.amount}</span>
          <button onClick={() => this.HandleCounterDec()} > - </button>
          <button className="btn btn-primary">Add to cart</button>

        </div>
      </div>
    );
  }
}
export default Card;
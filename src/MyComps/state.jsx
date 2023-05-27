import React from 'react';
import { Component } from 'react';
class StateComponent extends Component {
  constructor(props) {
    super(props);
        this.state = {
          isLoggedIn: false,
          subscription: 'Guest'
         };
    this.ButtonClick = this.ButtonClick.bind(this);
  }

  ButtonClick() {
    this.setState({
      isLoggedIn: true,
      subscription: 'You now have a subscription'
    });
  }

  render() {
    return (
      <div>
        <h3>Current Status:</h3>
        <ul>
          <li>Is Logged In: {this.state.isLoggedIn.toString()}</li>
          <li>Subscription: {this.state.subscription}</li>
        </ul>
        <button onClick={this.handleButtonClick}>Subscribe</button>
      </div>
    );
  }
}

/* to use it type this in App.js:
*
*ButtonClick() {
  // Update the isLoggedIn and subscription properties in the state object
  this.setState({
    isLoggedIn: true,
    subscription: 'You now have a subscription'
  });
}
By/Eslam Yasser

*/

export default StateComponent;
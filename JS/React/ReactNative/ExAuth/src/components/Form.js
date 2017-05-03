/**
*
* @class: Login componenet handling password input data
*
*/


import React, { Component } from 'react';

import { CardSection, Card, Button, Input } from '../reusables/resuablesPackage';

export default class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state = { text: '' };
  }


  render(){
    return(
        <Card>

          {/* User login input */}
          <CardSection>
            <Input
              onChangeText={ text => this.setState({ text: text })}
              value={this.state.text}
              label={'Email'}
              />
          </CardSection>


          {/* Login button  */}
          <CardSection>
            <Button> Log in </Button>
          </CardSection>

      </Card>
    )
  }

}

const styles = {
  textInput: {
    height: 20,
    width: 100,
    backgroundColor: '#000',
    color: '#fff'
  }
}

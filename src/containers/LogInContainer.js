import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import * as adaptors from '../adaptors';

class LogInContainer extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange= (e, { name, value }) => this.setState({ [name]: value });

  handleClick = () => {
    adaptors.auth(this.state.username, this.state.password)
      .then(response => console.log(response));
  };

  render() {
    return (
      <Form>
        <Form.Input
          label="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <Form.Button
          content="Submit"
          onClick={this.handleClick}
        />
      </Form>
    );
  }
}

export default LogInContainer;
import React, { Component } from 'react';
import { Container, Form, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { logIn } from '../actions';

const propTypes = {
  logIn: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  message: PropTypes.string.isRequired,
};

class NewUserContainer extends Component {
  state = {
    username: '',
    password: '',
    verifyPassword: '',
  };

  handleChange= (e, { name, value }) => this.setState({ [name]: value });

  handleClick = async () => {
    await this.props.logIn(this.state.username, this.state.password);
    if (this.props.isAuth === true) this.props.history.push('/');
  };

  render() {
    return (
      <Container>
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
          <Form.Input
            label="Verify Password"
            name="verifyPassword"
            value={this.state.verifyPassword}
            onChange={this.handleChange}
          />
          <Form.Button
            content="Submit"
            loading={!!this.props.isFetching}
          />
        </Form>
        <Header
          as="h3"
          color="red"
          content={this.props.message}
        />
      </Container>
    );
  }
}

NewUserContainer.propTypes = propTypes;

const mapStateToProps = ({ auth }) => (
  {
    isAuth: auth.isAuth,
    isFetching: auth.isFetching,
    message: auth.message,
  }
);

export default withRouter(connect(mapStateToProps, { logIn })(NewUserContainer));

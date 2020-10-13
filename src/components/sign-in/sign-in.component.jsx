import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Already have an account?</h2>
        <span>Sign in with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='email'
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label='password'
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;

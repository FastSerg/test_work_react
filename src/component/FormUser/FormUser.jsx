import React from 'react'
import './FormUser.scss'

class FormUser extends React.Component {
  state = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    formErrors: {firstName:'', lastName:'', email: '', password: ''},
    firstNameValid: false,
    lastNameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false,
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},() => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstName;
    let lastNameValid = this.state.lastName;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

  switch(fieldName) {

      case 'firstName':
      firstNameValid = value.match(/(?=.*[a-z])[a-z]{2,}/g);
      fieldValidationErrors.firstName  = firstNameValid ? '' : 'is too short';
      break;

      case 'lastName':
        lastNameValid = value.match(/(?=.*[a-z])[a-z]{2,}/g);
      fieldValidationErrors.lastName = lastNameValid ? '' : 'is too short';
      break;

      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;

      case 'password':
        passwordValid =value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,10}$/g);
        fieldValidationErrors.password = passwordValid ? '': 'is invalid';
        break;
        
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,firstNameValid,lastNameValid,
                    emailValid,
                    passwordValid,
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.firstNameValid && this.state.lastNameValid && this.state.emailValid &&
                              this.state.passwordValid});
  }

render() {
  
  return (
    <div className='form-container'>
    <form className='form-user'>
      <input type="text" name='firstName' placeholder='First Name' onChange={this.handleUserInput} value={this.state.firstName} required />
      {!this.state.firstNameValid && <div className='error-validations'>{this.state.formErrors.firstName}</div>}
      <input type="text" name='lastName' placeholder='Last Name' onChange={this.handleUserInput} value={this.state.lastName} required/>
      {!this.state.lastNameValid && <div className='error-validations'>{this.state.formErrors.lastName}</div>}
      <input type="email" name='email' placeholder='email' onChange={this.handleUserInput} value={this.state.email} required/>
      {!this.state.emailValid && <div className='error-validations'>{this.state.formErrors.email}</div>}
      <input type="password" name='password' placeholder='password' onChange={this.handleUserInput} value={this.state.password} required/>
      {!this.state.passwordValid && <div className='error-validations'>{this.state.formErrors.password}</div>}
      <button type='submit' disabled={!this.state.formValid}>Send Form</button>
    </form>
    </div>
  )
}
}
  

export default FormUser
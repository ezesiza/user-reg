// @ts-nocheck
import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "./isEmpty";
import TextFieldGroup from "./TextFieldGroup";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            username: "",
      email: "",
      password: "",
      password2: "",
      errors: {
          username: "",
          email: "",
        password: "",
        password2: "",
    },
};

this.formRef = React.createRef()
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  SaveDataToLocalStorage(data) {
    let users = [];
    users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("User Created! with credentials", data);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  onSubmit(e) {
    e.preventDefault();
    const user = {
      firstname: this.state.firstname,
    };
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    for (let index in newUser) {
      if (isEmpty(newUser[index])) {
        this.setState((prevState) => ({
          ...prevState,
          errors: `${prevState.errors[index] || index} can not be empty`,
        }));
        return null;
      } 
      
      else if (newUser.password !== newUser.password2) {
        this.setState({ errors: `Passwords should be equal` });
        return null;
      }
    }

    this.SaveDataToLocalStorage({ ...user, ...newUser });
    this.props.history.push('/')
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="First Name"
                  name="firstname"
                  type="text"
                  value={this.state.firstname}
                  onChange={this.onChange}
                />
                <TextFieldGroup
                  placeholder="User Name"
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.onChange}
                  error={Object.values(errors)}
                />
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={Object.values(errors)}
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={Object.values(errors)}
                />
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={Object.values(errors)}
                />

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  errors: PropTypes.array,
};

export default Register;

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const {
      email,
      password,
      password_confirmation
    } = this.state;
    axios
      .post(
        "http://localhost:3000/users",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          console.log("Registration data", response.data)
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password_confirmation"
              placeholder="Password Confirmation"
              required
              value={this.state.password_confirmation}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-sm">
            Register
          </button>
          <p>
            Have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}
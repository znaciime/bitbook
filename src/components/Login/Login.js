import React from "react";

import "./Login.css";
import { fetchLogin } from "../../services/userService";
import { fetchRegister } from "../../services/userService";
import { Auth } from '../../services/AuthService';
import bitbooklogo from "../../images/bitbooklogo.png"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "nav-link",
      isActive2: "nav-link  active",
      isActive3: "isShowing",
      isActive4: " isNotShowing",
      email: "",
      password: "",
      name: ""
    };
  }
  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  switchClass = () => {
    this.setState({
      isActive: "nav-link ",
      isActive2: "nav-link active",
      isActive3: " isShowing",
      isActive4: " isNotShowing"
    });
  };

  switchClass2 = () => {
    this.setState({
      isActive: "nav-link active",
      isActive2: "nav-link ",
      isActive3: " isNotShowing",
      isActive4: " isShowing"
    });
  };

  loginRequest = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    };

    fetchLogin(data)
      .then(token => {
        return Auth.loginUser(token)
      })
      .then(() => {
        this.props.history.push("/feed");
      });
  };

  registerRequest = () => {
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    fetchRegister(data)
      .then((res) => {
        localStorage.setItem("token", res.accessToken)
      });
    console.log(localStorage.getItem("token"))
  };


  render() {

    const objectHistory = this.props
    console.log(objectHistory)

    return (
      <> <header>
        <nav className="navbar navbar-expand navbar navbar-dark row justify-content-between shadow">
          <div className="container">
            <span className="navbar-brand">
              <img src={bitbooklogo} height="26px" alt="" />
              <span>itbook</span>
            </span>
          </div>
        </nav>
      </header>

        <div className="d-flex mt-5 justify-content-center">
          <div className="row mt-5 container">
            <div className="col-6 text-white">
              <h2>Bitbook</h2>
              <p>
                Bitbook is new super cool social network. We had a vision to connect
                people and make them believe in a better future. It's free to use but
                we need some money to survive, so if you have some extra cash please
                give it to us. More options coming very soon so be ready to flip out
                . We won't let you down... Or we will, let's gamble!
            </p>
            </div>
            <div className="col-6 text-dark ">
              <div className="card text-center">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${this.state.isActive2}`}
                        onClick={this.switchClass}
                      >
                        Login
                    </ button>
                    </li>

                    <li className="nav-item">
                      <button
                        className={`nav-link ${this.state.isActive}`}
                        onClick={this.switchClass2}

                      >
                        Register
                    </button>
                    </li>
                  </ul>
                </div>

                <div className="card-body">
                  <div className={this.state.isActive3}>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroup-sizing-default"
                            >
                              Email:
                          </span>
                          </div>
                          <input

                            onChange={this.onInputChange}
                            name="email"
                            type="email"
                            className="form-control text-dark"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                          />
                        </div>
                      </div>
                     
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroup-sizing-default"
                            >
                              Password:
                          </span>
                          </div>
                          <input

                            onChange={this.onInputChange}
                            name="password"
                            type="password"
                            className="form-control text-dark"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                          />
                        </div>
                      </div>
                     
                    </div>
                    <div className="row">
                      <button
                        onClick={this.loginRequest}
                        href="#"
                        className="btn btn-primary ml-3"
                      >
                        Login
                    </button>
                    </div>
                  </div>
                  <div className={this.state.isActive4}>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group mb-3 text-dark">
                          <div className="input-group-prepend  text-dark ">
                            <span
                              className="input-group-text"
                              id="inputGroup-sizing-default"
                            >
                              Enter name:
                          </span>
                          </div>
                          <input

                            onChange={this.onInputChange}
                            name="name"
                            type="text"
                            className="form-control text-dark"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroup-sizing-default"
                            >
                              Enter Email:
                          </span>
                          </div>
                          <input

                            onChange={this.onInputChange}
                            name="email"
                            type="text"
                            className="form-control"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroup-sizing-default"
                            >
                              Enter Password:
                          </span>
                          </div>
                          <input
                            type="text"
                            className="form-control text-dark"
                            onChange={this.onInputChange}
                            name="password"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <button onClick={this.registerRequest} href="#" className="btn btn-primary ml-3">
                        Register
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className='page-footer font-small mt-5 fixed-bottom'>
          <div className="footer-copyright text-center text-white py-3" >
            <span style={{ opacity: '0.5' }}>&copy; {new Date().getFullYear()} Copyright</span><span> PROJECT-X</span>
          </div>
        </footer>
      </>
    );
  }
}
export default Login;

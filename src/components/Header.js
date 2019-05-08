import React from "react";
import { NavLink } from "react-router-dom";
import bitbooklogo from "./../images/bitbooklogo.png";
import { Auth } from "../services/AuthService";
import { withRouter } from 'react-router'
import { fetchSingleUser } from '../services/userService'


class Header extends React.Component {
  constructor () {
    super()

    this.state={
      user: {}
    }
  }


  componentDidMount() {
    fetchSingleUser(Auth.getUserId())
      .then(user => this.setState({ user }))
  }
  
  removeToken = () => { 

    Auth.logout();
    this.props.history.push('/');
  };

  render () {

    console.log(this.state.user);

    return (
    <header>
      <nav className="navbar navbar-expand navbar navbar-dark row justify-content-between shadow">
        <div className="container">
          <NavLink to="/feed" className="navbar-brand">
            <img src={bitbooklogo} height="26px" alt="" />
            <span>itbook</span>
          </NavLink>
          <ul className="navbar-nav d-flex flex-row align-items-center flex-wrap">
            <li className="nav-item">
              <NavLink
                to="/feed"
                className="nav-link"
                activeClassName="selected"
              >
                Feed
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/users"
                className="nav-link"
                activeClassName="selected"
              >
                People
              </NavLink>
            </li>
            <li className="nav-item ml-2">
              <div className="col-2 p-0" style={{ cursor: "pointer" }}>
                <div className="dropdown p-0 sticky-top">
                  <span
                    className="dropdown-toggle"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <img src={this.state.user.img} style={{ display: "block", height: "30px", width: "30px", borderRadius: "50%", border: "1px solid white" }} alt="" />
                  </span>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">                    
                    <span>
                    <NavLink
                      to="/profile"
                      className="dropdown-item"
                    >
                      Profile
                    </NavLink>
                    </span>
                    <div className="dropdown-divider" />
                    <span>
                    <NavLink
                      to="/"
                        className="dropdown-item-custom p-4"
                        onClick={this.removeToken}
                        style={{ color: "red" }}
                      >
                      Log Out
                    </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )}
}

export default withRouter(Header);

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
      <nav className="navbar navbar-expand navbar navbar-dark  justify-content-between shadow">
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
            <li className="nav-item row">
              <div className="col-4" style={{ cursor: "pointer" }}>
                <img src={this.state.user.img} style={{ display: "block", height: "30px", width: "30px", borderRadius: "50%", border: "1px solid white" }} alt="" />
               </div>
                    
                     <NavLink
                      to="/profile"
                      className="nav-link col-4"
                    >
                   
                      Profile
                    </NavLink>
                    
                   

              </li> 
                                    
                    
                    
                    
                    <li>
                    <NavLink
                      to="/"
                        className="nav-link"
                        onClick={this.removeToken}
                        
                      >
                      Log Out
                    </NavLink>
                    </li>
                  
               
              
           
          </ul>
        </div>
      </nav>
    </header>
  )}
}

export default withRouter(Header);

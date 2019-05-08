import React from "react";
import { profileUpdate, fetchSingleUser } from "../../services/userService";
import { Auth } from "../../services/AuthService"
import { countries } from '../../shared/countries'

const Countries = () => {
  let myCountries = []

  for (let i = 0; i < countries.length; i++) {
    myCountries.push(<option key={countries[i].code} value={countries[i].code}>{countries[i].name}</option>)
  }
  return myCountries
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Auth.getUserId(),
      user: {},
      avatarInput: "",
      nameInput: "",
      surnameInput: "",
      aboutInput: "",
      aboutJob: "",
      aboutCompany: ""
    };
  }

  componentDidMount() {
    fetchSingleUser(this.state.id)
      .then(user => {
        this.setState({
          user: user,
          avatarInput: user.img,
          nameInput: user.name,
          surnameInput: user.surname,
          aboutInput: user.about,
          aboutJob: user.position,
          aboutCompany: user.company
        })
      })
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  changeData = () => {
    const data = {
      avatarUrl: this.state.avatarInput,
      name: {
        first: this.state.nameInput,
        last: this.state.surnameInput
      },
      about: {
        bio: this.state.aboutInput,
        job: this.state.aboutJob,
        countryCode: this.state.aboutCompany
      }
    };

    profileUpdate(data).then(() => {
      this.props.onUpdateSuccess();
    });
  };

  render() {

    return <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="ProfileModal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Update Profile</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="row">
              <div className="col-4">
                <div className="form-group">
                  <label className="col-12">Change avatar</label>
                  <input type="text" placeholder={this.state.avatarInput} name="avatarInput" className="form-control modal-form" onChange={this.onInputChange} />
                </div>
                <div className="avatar-preview text-center" style={{ color: "grey" }}>
                  <p>Preview</p>
                  <div className="thumb" style={{ backgroundImage: "url(" + this.state.avatarInput + ")" }}></div>
                </div>
              </div>
              <div className="col-8">
                <div className="form-group col-6 d-inline-block">
                  <label className="col-12">First name</label>
                  <input type="text" placeholder={this.state.nameInput} name="nameInput" className="form-control modal-form" onChange={this.onInputChange} />
                </div>
                <div className="form-group col-6 d-inline-block">
                  <label className="col-12">Last name</label>
                  <input type="text" placeholder={this.state.surnameInput} name="surnameInput" className="form-control modal-form" onChange={this.onInputChange} />
                </div>
                <div className="form-group text-left">
                  <label className="col-form-label">Bio</label>
                  <textarea className="form-control modal-form" placeholder={this.state.aboutInput}
                    name="aboutInput"
                    onChange={this.onInputChange} >
                  </textarea>
                </div>
                <div className="form-group text-left">
                  <label className="col-form-label">Position</label>
                  <input type="text" placeholder={this.state.aboutJob} name="aboutJob" className="form-control modal-form" onChange={this.onInputChange} />
                </div>
                <div className="form-group text-left">
                  <label>Country</label>
                  <select className="form-control modal-form" name="aboutCompany" onChange={this.onInputChange}>
                    <Countries />
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={this.changeData}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Modal;

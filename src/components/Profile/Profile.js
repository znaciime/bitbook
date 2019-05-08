import React from "react";
import { fetchSingleUser } from "../../services/userService";
import Modal from "../../components/modal/Modal";
import { Auth } from "../../services/AuthService"


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    const userId = this.props.match.params.id || Auth.getUserId();
    fetchSingleUser(userId).then(user => {
      this.setState({
        user
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchUser();
    }
  }

  onUpdateSuccess = () => {
    this.fetchUser();
  };

  render() {
    console.log(this.state.user.id)
    if (!this.state.user.id) {
      return <p>Loading</p>;
    }
    const user = this.state.user;
    return (
      <>
        <div className="container mt-4" key={user.id}>
          {this.state.isShowing ? (
            <div onClick={this.closeModalHandler} className="back-drop" />
          ) : null}

          <div className="row justify-content-center ">
            <div className="card customCard shadow col-6">
              <div className="col text-center">
                <img
                  src={user.img}
                  className="mt-4"
                  style={{ borderRadius: "50%", width: "50%" }}
                  alt=""
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">
                  {user.name} {user.surname}
                </h5>
                {user.id === Auth.getUserId() ? (
                  <>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                      Update Profile
                    </button>
                    <Modal onUpdateSuccess={this.onUpdateSuccess} />
                  </>
                ) : (
                    ""
                  )}

                <p className="card-text">
                  <b>About:</b> {user.about}
                  <br />
                  <b>Position:</b> {user.position}
                  <b className="ml-3">Country: </b>
                  {user.company}
                </p>
                <div className="row justify-content-center">
                  <div className="chips">
                    <div className="chip">
                      <div className="chip-icon">{user.posts.length}</div>posts
                    </div>
                  </div>
                  <div className="col-3" />
                  <div className="chips">
                    <div className="chip">
                      <div className="chip-icon">{user.comments.length}</div>
                      comments
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;

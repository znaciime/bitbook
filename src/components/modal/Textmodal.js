import React from "react";
import { createPost } from "../../services/postService";
import { Auth } from "../../services/AuthService"

class TextModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Auth.getUserId(),
      textpost: ""
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  changeData = () => {
    const data = {
      type: "text",
      text: this.state.textpost
    };

    createPost(data).then(() => {
      this.props.onUpdateSuccess();
    });
  };

  render() {
    return <div className="modal fade" id="textModal" tabIndex="-1" role="dialog" aria-labelledby="ProfileModal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Submit post</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={this.changeData}>

              <div className="form-group text-left">
                <label className="col-form-label">What's up?</label>
                <input type="text" placeholder="..." name="textpost" value={this.state.textpost} className="form-control modal-form" onChange={this.onInputChange} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={this.changeData}>Post</button>
          </div>
        </div>
      </div>
    </div>
  }
}

export default TextModal;

import React from "react";
import { createPost } from "../../services/postService";
import { Auth } from "../../services/AuthService"

class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Auth.getUserId(),
      imageUrl: ""
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  changeData = () => {
    const data = {
      type: "image",
      imageUrl: this.state.imageUrl,
      userId: 2
    };

    createPost(data).then(() => {
      this.props.onUpdateSuccess();
    });
  };

  render() {
    return <div className="modal fade" id="imageModal" tabIndex="-1" role="dialog" aria-labelledby="ProfileModal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Submit Image</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>

              <div className="form-group text-left">
                <label className="col-form-label">Post an Image</label>
                <input type="text" placeholder="Image url..." name="imageUrl" value={this.state.imageUrl} className="form-control modal-form" onChange={this.onInputChange} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={this.changeData} data-dismiss="modal">Post</button>
          </div>
        </div>
      </div>
    </div>
  }
}

export default ImageModal;

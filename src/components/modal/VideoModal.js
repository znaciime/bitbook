import React from "react";
import { createPost } from "../../services/postService";
import { Auth } from "../../services/AuthService"


class VideoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Auth.getUserId(),
      videoUrl: ""
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  changeData = () => {
    const data = {
      type: "video",
      videoUrl: `https://www.youtube.com/embed/${this.state.videoUrl.slice(
        this.state.videoUrl.indexOf("=") + 1
      )}`,
      userId: 2
    };

    createPost(data).then(() => {
      this.props.onUpdateSuccess();
    });
  };

  render() {
    return <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="ProfileModal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Submit Video</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>

              <div className="form-group text-left">
                <label className="col-form-label">Post a YouTube video</label>
                <input type="text" placeholder="YouTube video URL" name="videoUrl" value={this.state.videoUrl} className="form-control modal-form" onChange={this.onInputChange} />
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

export default VideoModal;

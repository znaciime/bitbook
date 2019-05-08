import React from "react";
import "./floatingButtonCss.css";
import TextModal from "../modal/Textmodal";
import ImageModal from "../modal/ImageModal";
import VideoModal from "../modal/VideoModal";

class MainButton extends React.Component {

  onUpdateSuccess = () => {
    this.props.afterCreation();
  };

  render() {

    return (
      <>
        <TextModal onUpdateSuccess={this.onUpdateSuccess} />
        <ImageModal onUpdateSuccess={this.onUpdateSuccess} />
        <VideoModal onUpdateSuccess={this.onUpdateSuccess} />

        <div id="container-floating" style={{ zIndex: '9999' }}>
          <div
            className="nd4 nds bg-warning zoom"
            data-placement="left"
            data-toggle="modal" data-target="#imageModal"
          >
            <img alt="" className="reminder" />
            <p className="letter">
              <i className="fas fa-camera-retro" />
            </p>
          </div>

          <div
            className="nd3 nds bg-danger videoButton zoom"
            data-placement="left"
            data-toggle="modal" data-target="#videoModal"
          >
            <i className="fas fa-film reminder text-white" />
          </div>

          <div
            className="nd1 nds bg-primary zoom"
            data-placement="left"
            data-toggle="modal" data-target="#textModal">
            <img alt="" className="reminder bg-primary" />
            <p className="letter">T</p>
          </div>

          <div
            id="floating-button"
            data-toggle="tooltip"
            data-placement="left"
            data-original-title="Create"
          >
            <p className="plus">+</p>
            <img
              className="edit"
              src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}

export { MainButton };

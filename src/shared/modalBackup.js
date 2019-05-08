(
    <div
        className="modal-wrapper main "
        style={{
            transform: this.props.show ? "translateY(0vh)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
        }}
    >
        <div className="modal-header">
            <h3>Update profile</h3>
            <span className="close-modal-btn" onClick={this.props.close}>
                ×
        </span>
        </div>
        <div className="modal-body row text-left">
            <div className="col-6">
                <label>Change picture</label>

                <input
                    value={this.state.avatarUrl}
                    name="avatarInput"
                    onChange={this.onInputChange}
                    type="text"
                />
            </div>
            <div className="col-6 text-left">
                <label>First name</label>
                <input
                    value={this.state.nameInput}
                    name="nameInput"
                    onChange={this.onInputChange}
                    type="text"
                    className="col-12"
                />
                <label>Last name</label>
                <input
                    value={this.state.surnameInput}
                    name="surnameInput"
                    onChange={this.onInputChange}
                    type="text"
                    className="col-12"
                />
            </div>

            <label className="ml-3">About user</label>
            <input
                value={this.state.aboutInput}
                name="aboutInput"
                onChange={this.onInputChange}
                type="text"
                className="col-11 ml-3"
            />
            <label className="ml-3">Profession</label>
            <input
                value={this.state.aboutJob}
                name="aboutJob"
                onChange={this.onInputChange}
                type="text"
                className="col-11 ml-3"
            />
            <label className="ml-3">Country code</label>
            <input
                value={this.state.aboutCompany}
                name="aboutCompany"
                onChange={this.onInputChange}
                type="text"
                className="col-11 ml-3"
            />
            <p>{this.props.children}</p>
        </div>

        <div className="modal-footer">
            <button className="btn-cancel" onClick={this.props.close}>
                Close
        </button>
            <button onClick={this.changeData} className="btn-continue">
                Update profile
        </button>
        </div>
    </div>
);

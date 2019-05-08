import React from 'react'
import { fetchData } from '../../services/postService';
import { Auth } from '../../services/AuthService';

class CommItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: "",
            auth: Auth.getUserId()
        }
    }

    componentDidMount() {
        fetchData(`/users/${this.props.userId}`)
            .then(user => this.setState({ user }))

    }

    deleteCommentMethod(id) {
        this.props.handleDelete(id)
    }

    render() {
        const { id, comment, userId } = this.props
        const { user, auth } = this.state

        console.log(comment);

        const firstName = user.name ? user.name.first : ''

        return <div className="card mb-3 customCard">
            <div className="row no-gutters">
                <div className="col-md-2 text-center">
                    <img src={user.avatarUrl} className="card-img" style={{ borderRadius: '50%', maxWidth: '5em' }} alt="..." />
                    <h5 className="card-title text-center m-0">{firstName}</h5>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <p className="card-text">{comment.body}</p>
                        <p className="card-text"><small className="text-muted">{new Date(comment.createdAt).toDateString()}</small></p>
                    </div>

                    {userId === auth ?
                        <span className="trashcan float-right" onClick={() => this.deleteCommentMethod(id)}><i className="far fa-trash-alt ml-3"></i></span>
                        : <></>}

                </div>
            </div>
        </div>
    }
}

export default CommItem
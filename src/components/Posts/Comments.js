import React from 'react'
import { fetchData } from '../../services/postService';
import CommItem from './CommItem';

import { postComm } from '../../services/commentsService';
import { deleteComment } from '../../services/commentsService';
import SearchFail from '../../shared/SearchFail';


class Comments extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            commentInput: ""
        }
    }

    componentDidMount() {
        this.fetchComments()
    }

    fetchComments() {
        fetchData(`/posts/${this.props.id}/comments`)
            .then(comments => this.setState({ comments: comments.reverse() }))
    }

    newComm = (e) => {
        e.preventDefault()

        const { commentInput } = this.state

        if (!commentInput.length) {
            return
        }
        postComm(this.props.id, commentInput)
            .then(() => {
                this.fetchComments();
                this.setState({ commentInput: '' })
            })
    }

    handleCommentInput = (e) => {
        const commentInput = e.target.value
        this.setState({
            commentInput
        })
    }

    removeComment = (id) => {
        deleteComment(id)
            .then(() => {
                this.fetchComments()
            })
    }


    render() {
        const { comments } = this.state;

        return (
            <div className="m-4 mt-5">
                <div className='text-center mb-3'>
                    <form action="" onSubmit={this.newComm}>
                        <input type='text'
                            placeholder='Add a comment...'
                            onChange={this.handleCommentInput}
                            name='comment'
                            value={this.state.commentInput}
                            className='form-control inputLine'
                            style={{ width: '80%' }} />
                        <button type="submit" className="btn btn-primary">Post</button>
                    </form>
                </div>
                {
                    comments.length !== 0 ? comments.map((obj) => {
                        return <CommItem key={obj.id} id={obj.id} comment={obj} userId={obj.userId} handleDelete={this.removeComment} />
                    }) :
                        <div className='row justify-content-center'>
                            <div className='col-5'>
                                <SearchFail str="No comments for this post yet..." />
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default Comments
import React from "react";
import PostList from "./../Posts/PostList";
import {deletePost, fetchData} from "../../services/postService";
import Pagination from "./Pagination";
import { MainButton } from "../FloatingButton/MainButton";

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      pageNum: 0,
      filter: ""
    };
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = () => {
    fetchData("/posts")
      .then(posts => {
          const reversed = posts.reverse()
          let myPosts = []
          
          for (let i = 0, chunk = 10; i<reversed.length; i+=chunk) {
            let temparray = reversed.slice(i, i+chunk);
            myPosts.push(temparray)
          }
            
          this.setState({ posts: myPosts })
      })
  }

  removePost = (postId) => {
    deletePost(postId)
      .then(() => {
        this.fetchPosts()
      })
  }

  setPageNum = num => {this.setState({ pageNum: num })}
  nextPage = () => {this.setState({ pageNum: this.state.pageNum + 1 })}
  prevPage = () => {this.setState({ pageNum: this.state.pageNum - 1 })}

  setFilter = str => {this.setState({ filter: str })}


  render() {
    const { posts, pageNum, filter } = this.state;

    
    if(posts.length === 0) return <h1>Loading...</h1>
    const filteredPosts = posts[pageNum].filter(post => post.type === filter);

    return (
      <div className="container">
      <div className="row">
      
        <div className="col-2" />

        <div className="col-8">
          <PostList 
            posts={filteredPosts.length !== 0 ? filteredPosts : posts[pageNum]} 
            handleDelete={this.removePost} 
            fetchPosts={this.fetchPosts} />
          <Pagination 
          pages={posts.length}
          currPage={pageNum}
          handlePage={this.setPageNum}
          next={this.nextPage}
          prev={this.prevPage} />
          <MainButton afterCreation={this.fetchPosts} />
        </div>

        <div className="col-2">
          <div className="dropdown mt-4 sticky-top">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
            >
              Filter Posts
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <span
                className="dropdown-item"
                onClick={() => this.setFilter("text")}
              >
                Text
              </span>
              <span
                className="dropdown-item"
                onClick={() => this.setFilter("image")}
              >
                Image
              </span>
              <span
                className="dropdown-item"
                onClick={() => this.setFilter("video")}
              >
                Video
              </span>
              <div className="dropdown-divider" />
              <span
                className="dropdown-item"
                style={{ color: "red" }}
                onClick={() => this.setFilter("")}
              >
                All
              </span>
            </div>
          </div>
        </div>
      </div>


      </div>

    );
  }
}

export default Feed;

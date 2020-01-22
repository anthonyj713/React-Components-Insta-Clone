//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";


// pass the data from App.js down as props then map through the data
const PostsPage = () => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map( postData => {
          <Post post = {postData}/>
      })}
    </div>
  );
};

export default PostsPage;


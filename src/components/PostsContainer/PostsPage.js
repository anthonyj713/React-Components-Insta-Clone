//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";


// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map( (postData, i) => {
      return <Post key = {i} post = {postData}/>
      })}
    </div>
  );
};

export default PostsPage;


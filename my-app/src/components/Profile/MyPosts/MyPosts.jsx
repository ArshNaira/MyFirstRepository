import React from "react";
import s from '../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts=()=>{
    return (
       <div >
   
  <div>
    <textarea>Add post</textarea>  
    <button>Remove</button>
 
   <Post message="Hello , how are you" countLikes='0' />
   <Post message="Fine, and you?" countLikes='2' />
   <Post message="its my first post" countLikes='5' />
 
  </div>
  </div>
    )
}

export default MyPosts;
import React from "react";
import s from '../Post/Post.module.css';

const Post=({message,countLikes})=>{
    return (
      
 
  <div className={s.item}>
    <img src="https://i.ya-webdesign.com/images/avatar-png.png" ></img>
   {message}
   <div><span>Like {countLikes}</span></div>
  </div>
    )
}

export default Post;
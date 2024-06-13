import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css"
import { useState } from "react";
import Modal from "./Modal"
import { v4 as uuidv4 } from 'uuid';
export default function PostList({isPosting,onStopPost}) {
    const[posts,setNewPost] = useState([]);
   function addPostHandler(postData){
    const postWithId = { ...postData, id: uuidv4() }; 
      setNewPost((existingPosts) => [postWithId, ...existingPosts,]);
   }

    return (
        <>
            {isPosting && (
            <Modal onClose={onStopPost}>

                <NewPost onCancel={onStopPost}  onAddPost = {addPostHandler}/>

            </Modal>)};

            <ul className={classes.posts}>
               {posts.map((post) => <Post key ={post.id}  author = {post.author} description = {post.description}/> )} 
            </ul>
        </>
    );
}
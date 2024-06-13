import { useState } from "react";
import classes from "./NewPost.module.css"
export default function NewPost({onCancel , onAddPost}){ 

    const [enterPost, setEnterPost] = useState("");
    const [enterAuthor, setEnterAuthor] = useState("");
    

    function changePost(event) {
        setEnterPost(event.target.value);
    }

    function changeAuthor(event) {
        setEnterAuthor(event.target.value);
    }
    function handelSubmit(event){
        event.preventDefault();
        const postData = {
            author : enterAuthor,
            description : enterPost
        };
        onAddPost(postData);
        onCancel();
    }
   
    return (
    <form className = {classes.form}  onSubmit = {handelSubmit}>
<p>
    <label htmlFor="body">Text</label>
    <textarea id ="body" required rows = {3} onChange = {changePost}/>
</p>

<p>
    <label htmlFor ="name">YourName</label>
    <input type="text" id ="name" required  onChange = {changeAuthor}></input>
</p>
<p className = {classes.actions}>
    <button type ="button" onClick={onCancel}>Cancle</button>
    <button type = "submit">Submit</button>
</p>
    </form>
    );
}
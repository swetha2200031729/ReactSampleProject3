import classes from "./Post.module.css"
export default function Post({author , description}){
    return (
        <li className = {classes.post} >
          <p className ={classes.author} >{author}</p>
          <p>{description}</p>
        </li>
    );
}
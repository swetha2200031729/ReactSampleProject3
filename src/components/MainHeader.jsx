import classes from "./MainHeader.module.css";
import { MdMessage , MdPostAdd } from 'react-icons/md';
export default function MainHeader({onCreatePost}){
   
    return (
        <header className={classes.header}>
            <h1 className = {classes.logo}>
                <MdMessage/>
                React Poster
            </h1>
            <p>
            <button className = {classes.button} onClick = {onCreatePost}> 
            <MdPostAdd size = {18} />
            New Post
            </button>
            </p>
        </header>
    );
}
import classes from './PostCard.module.css';
import { shortenText } from '../../../shared/utility';
import { Route, Link } from 'react-router-dom';
import Post from '../../Posts/Post/Post';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const PostCard = ({ post, onDelete }) => {

    return (
        <div className={classes.PostCard}>
            <div className="flex">
                <small className={classes.PostDate}>On {post.creationDate} </small>
                {/* Will show only is Authenticated */}
                <AiFillEdit className={classes.Icons} />
                <AiFillDelete className={classes.Icons} onClick={() => onDelete(post.id)} />
            </div>
            <Link to={`/fullpost/${post.id}`} post={post}>
                <h4 >{shortenText(post.title, 80)}</h4>
            </Link>


            {/* <h4>{shortenText(post.title, 80)}</h4> */}
            <p className="text"> {shortenText(post.body, 40)}.</p>
            <small className={classes.author}>{shortenText(post.author, 40)}</small>
        </div>
    )
}
export default PostCard;

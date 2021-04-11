import React, { useEffect, useState, useCallback } from 'react';
import classes from './Posts.module.css';
import PostCard from '../UI/PostCard/PostCard';
import { deletePost, fetchPosts } from '../../store/actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import AddPost from './AddPost/AddPost';
import Button from '../UI/Button/Button';

const Posts = (props) => {
    document.title = "Doron Project Posts Lists";
    const [formDisplayState, setFormDisplayState] = useState(false);
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    const onRemovePost = id => dispatch(deletePost(id));
    const onFetchPosts = useCallback(() => dispatch(fetchPosts()), [dispatch]);

    useEffect(
        () => { onFetchPosts(); }, [onFetchPosts]
    );

    return (
        <React.Fragment>
            {formDisplayState ? < AddPost onAdd={() => setFormDisplayState(!formDisplayState)} /> : <Button clicked={() => setFormDisplayState(!formDisplayState)} btnType="AddTask">Add New Post</Button>}
            <div className={classes.Posts}>
                {posts.map(post => <PostCard key={post.id} post={post} onDelete={onRemovePost} />)}
            </div>
        </React.Fragment>
    )
}

export default React.memo(Posts)

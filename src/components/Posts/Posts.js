import React from 'react';
import classes from './Posts.module.css';
import PostCard from '../UI/PostCard/PostCard';
const Posts = ({ posts, onDelete }) => {

    return (
        <div className={classes.Posts}>
            {posts.map(post => <PostCard key={post.id} post={post} onDelete={onDelete} />)}
        </div>
    )
}

export default Posts

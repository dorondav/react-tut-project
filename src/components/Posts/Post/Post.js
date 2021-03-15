import React from 'react';
import classes from './Post.module.css';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FullPost from '../../UI/FullPost/FullPost';

const Post = (props) => {
    const paramId = props.match.params.id - 1;
    const posts = useSelector(state => state.posts.posts)
    console.log('posts[paramId]',)
    console.log('paramId', paramId)

    let fullPost = <Redirect to="/" />;

    if ((paramId + 1) === posts[paramId].id) {

        fullPost = (
            <FullPost post={posts[paramId]} />
        )

    }
    console.log('fullPost', fullPost)


    return (
        <React.Fragment>
            {fullPost}

        </React.Fragment>

    )
}

export default Post;

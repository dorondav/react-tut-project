import React, { useState, useCallback } from 'react';
import classes from './AddPost.module.css';
import { saveNewPost } from '../../../store/actions/posts';
import moment from 'moment';
import Button from '../../UI/Button/Button';
import { useDispatch } from 'react-redux';


const AddPost = (props) => {
    document.title = "Add Posts";
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');
    const [postAuthor, setPostAuthor] = useState('Doron Davidowitz');
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const onSavePost = useCallback(formData => dispatch(saveNewPost(formData)), [dispatch]);

    const onNewPostSubmit = e => {
        e.preventDefault();
        const currentDate = new Date();
        const formattedDate = moment(currentDate).format('MMMM Do YYYY, h:mm:ss');
        if (newPostTitle === ' ' || newPostContent === '' || postAuthor === '') {
            return setError(true);
        }

        const newPost = {
            author: postAuthor.trim(),
            body: newPostContent.trim(),
            creationDate: formattedDate.trim(),
            title: newPostTitle.trim()
        }
        onSavePost(newPost);
        setNewPostTitle('');
        setNewPostContent('');
    }

    let form = (
        <>
            <form className={classes.AddNew} onSubmit={onNewPostSubmit}>
                {error && <p className="errorMsg">Please Fill the Form </p>}
                <div className={classes.FormControl}>
                    <label >Title</label>
                    <input type="text"
                        placeholder="Title"
                        value={newPostTitle}
                        onChange={e => setNewPostTitle(e.target.value)} />
                </div>
                <div className={classes.FormControl}>
                    <label >Content</label>
                    <textarea
                        placeholder="Describe yourself here..."
                        value={newPostContent}
                        onChange={e => setNewPostContent(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" >Add Post</button>
            </form>
        </>
    )

    return (
        <React.Fragment>
            <Button clicked={props.onAdd} btnType='Danger'>Hide</Button>
            {form}
        </React.Fragment>
    )
}

export default React.memo(AddPost);

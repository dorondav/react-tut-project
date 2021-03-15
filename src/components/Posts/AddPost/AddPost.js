import { useState } from 'react';
import classes from './AddPost.module.css';
import axios from '../../../axios';
import moment from 'moment'

const AddPost = () => {
    document.title = "Add Posts";
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');
    const [postAuthor, setPostAuthor] = useState('Doron Davidowitz');

    // const posts = useSelector(state => state.posts.posts)
    // const dispatch = useDispatch();

    const onNewPostSubmit = async e => {
        e.preventDefault();
        try {
            const currentDate = new Date();
            const formattedDate = moment(currentDate).format('MMMM Do YYYY, h:mm:ss')
            const post = {
                title: newPostTitle,
                body: newPostContent,
                author: postAuthor,
                creationDate: formattedDate
            }

            const resp = await axios.post('/posts.json', post);
            setNewPostContent('');
            setNewPostTitle('');
            return resp.data;
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <form className={classes.AddNew} onSubmit={onNewPostSubmit}>
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
    )
}

export default AddPost

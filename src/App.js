import React, { useState } from 'react'
import classes from './App.module.css';
import Posts from './components/Posts/Posts';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = props => {
  document.title = "Doron Project Main Page"
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'i love ice creami love ice creami love ice creami love ice creami love ice creami love ice creami love ice cream ',
      body: 'how i love eating ice cream',
      author: 'doron davidowitz',
      created: '1.9.2021 12:27'
    },
    {
      id: 2,
      title: 'call doctor',
      body: 'call doctor this time',
      author: 'doron davidowitz',
      created: '3.9.2021 10:27'
    },
    {
      id: 3,
      title: 'i need to go to the bathroom ',
      body: 'i want to poop',
      author: 'doron davidowitz',
      created: '3.9.2021 10:27'
    },
    {
      id: 33,
      title: 'i need to go to the bathroom ',
      body: 'i want to poop',
      author: 'doron davidowitz',
      created: '3.9.2021 10:27'
    },
    {
      id: 35,
      title: 'i need to go to the bathroom ',
      body: 'i want to poop',
      author: 'doron davidowitz',
      created: '3.9.2021 10:27'
    },
    {
      id: 36,
      title: 'i need to go to the bathroom ',
      body: 'i want to poop',
      author: 'doron davidowitz',
      created: '3.9.2021 10:27'
    }
  ])


  const onDeletePost = id => {
    setPosts(posts.filter(post => post.id !== id));
  }

  return (
    <Router>
      <div className={classes.App}>
        <Navigation></Navigation>
        <div id="container">
          <Switch>
            <Route path="/posts">
              <Posts posts={posts} onDelete={onDeletePost} />
            </Route>
          </Switch>
        </div>

      </div>
    </Router >
  );
}

export default App;

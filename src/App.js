import React from 'react'
import classes from './App.module.css';
import Posts from './components/Posts/Posts';
import Post from './components/Posts/Post/Post';
import Navigation from './components/Navigation/Navigation';
import AddPost from './components/Posts/AddPost/AddPost';


import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
const App = props => {
  document.title = "Doron Project Main Page";

  return (
    <>
      <div className={classes.App}>
        <Navigation></Navigation>
        <div className="container">
          <Switch>
            <Route path="/" exact component={() => <Posts />} />
            <Route path="/posts" component={() => <Posts />} />
            <Route path="/new-posts" component={AddPost} />
            {/* <Redirect from="/" to="/posts" /> */}
            <Route path="/fullpost/:id" component={Post} />
          </Switch>

        </div>

      </div>
    </ >
  );
}

export default App;

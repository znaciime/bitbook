import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import People from "../components/People/People";
import Feed from "../components/Feed/Feed";
import PostPage from "../components/Posts/PostPage";


const Main = () => {
  return (
    <main className="container">
   
      <Switch>
        <Route path="/posts/:id" component={PostPage} />
        <Route path="/users/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={People} />
        <Route path="/feed" component={Feed} />
        <Redirect to="/feed" />
      </Switch>
    </main>
  );
};

export default Main;
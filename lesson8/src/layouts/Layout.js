import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Footer from "../components/Footer";
import footerItems from "../components/configs/footerConfig";

import Home from '../pages/Home';
import Posts from '../pages/Posts';
import Post from '../pages/Post';
import Comments from '../pages/Comments';
import Users from '../pages/Users';
import User from '../pages/User';

import {Switch, Route} from 'react-router-dom';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.blogName = "NewBlog";
    }

    isActive(href){
        return window.location.pathname === href;
    }

    render(){
        return(
            <div>
                <Menu blogName={this.blogName}>
                    <MenuItem href="/" active={this.isActive("/")}>Home</MenuItem>
                    <MenuItem href="/posts" active={this.isActive("/posts")}>Posts</MenuItem>
                    <MenuItem href="/comments" active={this.isActive("/comments")}>Comments</MenuItem>
                    <MenuItem href="/users" active={this.isActive("/users")}>Users</MenuItem>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/posts" component={Posts} />
                                <Route path="/posts/:id" component={Post} />
                                <Route path="/comments" component={Comments} />
                                <Route exact path="/users" component={Users} />
                                <Route path="/users/:id" component={User} />
                            </Switch>
                        </div>
                    </div>
                </div>
                <Footer content={footerItems} />
            </div>
        );
    }
}
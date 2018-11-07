import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Footer from "../components/Footer";
import footerItems from "../components/configs/footerConfig";

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
                        <div className="col-xs-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer content={footerItems} />
            </div>
        );
    }
}
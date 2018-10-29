import React from "react";
import Post from "./Post";

export default class Blog extends React.Component {
  render() {
    let items = this.props.posts.postItems.map((item, index) => {
      return (
        <div className="col-lg-4" key={index}>
          <Post post={item} isMain={false} />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="jumbotron">
              <Post post={this.props.posts.mainPost} isMain={true} />
            </div>
          </div>
        </div>
        <div className="row">{items}</div>
      </div>
    );
  }
}

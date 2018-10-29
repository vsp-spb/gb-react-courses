import React from "react";

export default class Post extends React.Component {
  render() {
    return (
      <div>
        {this.props.isMain ? (
          <h1>{this.props.post.title}</h1>
        ) : (
          <h2>{this.props.post.title}</h2>
        )}
        <p className="font-italic">
          By {this.props.post.author} - {this.props.post.date.toDateString()}
        </p>
        <p>{this.props.post.text}</p>
        <p>
          <a className="btn btn-secondary" href={this.props.post.href} role="button">
            Read more...
          </a>
        </p>
      </div>
    );
  }
}

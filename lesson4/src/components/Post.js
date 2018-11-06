import React from "react";
import Octicon, { Heart } from "@githubprimer/octicons-react";

export default class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  onLikeClick(){
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.props.isMain ? (
            <h1>{this.props.post.title}</h1>
          ) : (
            <div>
              <h2>{this.props.post.title}</h2>
              <button type="button" className="close" aria-label="Close" data-id={this.props.post.id}>
                &times;
              </button>
            </div>
          )}
        </div>
        <p className="font-italic">
          By {this.props.post.author} - {this.props.post.date.toDateString()}
        </p>
        <p>{this.props.post.text}</p>
        <p>
          <a className="btn btn-secondary" href={this.props.post.href} role="button">
            Read more...
          </a>
          <span style={{float: 'right'}} onClick={this.onLikeClick.bind(this)}>
            <Octicon icon={Heart} size="medium" />
            {this.state.likes>0 &&
              <span className="badge badge-light">{this.state.likes}</span>
            }
          </span>
        </p>
      </div>
    );
  }
}

import React from "react";
import Post from "./Post";
import $ from 'jquery'; 

export default class Blog extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      postItems: props.posts.postItems
    };
  }

  render() {
    let items = this.state.postItems.map((item, index) => {
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

  componentDidMount(){
      let self = this;

      $('body').on('click', 'button.close', function(event){
        event.preventDefault();
        let id = $(event.target).attr('data-id');
        self.deletePost(id);
      });
  }

  deletePost(postId){
    let index = this.state.postItems.findIndex((item) => Number(item.id) === Number(postId));
    if(index !== -1){
      this.state.postItems.splice(index, 1);
      this.setState({
        postItems: this.state.postItems
      });
    }
  }
}

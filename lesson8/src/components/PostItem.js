import React from 'react';
import {Link} from 'react-router-dom';
import {deletePost} from '../actions/postsAction';
import $ from 'jquery';
import {connect} from 'react-redux';

class PostItem extends React.Component {
  constructor(props){
    super(props);
    this.deleteId = `delete-btn-${this.props.id}`;
    this.editId = `edit-btn-${this.props.id}`;
  }
  render() {
    return (
      <div>
        <div className="card">
          <h5 className="card-header">
            <Link to={`/posts/${this.props.id}`}>
            {this.props.title}
            </Link>
          </h5>
          <div className="card-body">
            <p className="card-text">{this.props.body}</p>
          </div>
          <div className="card-footer text-muted">
            <a href="#" className="btn btn-secondary" id={this.editId} data-toggle="modal" data-target="#editPostModal">Edit</a>
            &nbsp;
            <a href="#" className="btn btn-secondary" id={this.deleteId}>Delete</a>
          </div>
        </div>
        <br/>
      </div>
    );
  }

  componentDidMount(){
    $('#'+this.editId).on('click', (event) => {
      event.preventDefault();
      $("#editIdField").val(this.props.id);
      $("#editTitleField").val(this.props.title);
      $("#editBodyField").val(this.props.body);
    });

    $('#'+this.deleteId).on('click', (event) => {
      event.preventDefault();
      this.props.dispatch(deletePost(this.props.id));
    });
  }
}

function mapStateToProps(store){
  return {
      posts: store.posts.posts
  };
}

export default connect(mapStateToProps)(PostItem);

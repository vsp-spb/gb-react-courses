import React from "react";
import Comment from "./Comment";

export default class CommentList extends React.Component {
    render() {
        if (!this.props.comments.length) {
            return null;
        }

        let comments = this.props.comments.map((comment, index) => {
            return <Comment key={index} showFooter='true' {...comment} />;
        });

        return (
            <div>
                <h1>Comment list</h1>
                {comments}
            </div>
        );
    }
}
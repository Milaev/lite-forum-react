import React from 'react'
import Comment from '../comment/comment';

const CommentsList = ({comments}) => {

	if(!comments.length) {
		return (
			<h1 style={{ textAlign: "center" }}>Комментариев нет</h1>
		)
	}

	return (
		<div>
			{comments.map(comment =>
				<Comment
					key={comment.id}
					comment={comment}
				/>
			)}
		</div>
	)
}

export default CommentsList;

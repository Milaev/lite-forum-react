
const Comment = ({comment}) => {
	return (
		<div className="post comment">
			<div className="post__content">
				<p><strong>От: {comment.email}</strong></p>
				<p><strong>Тема: {comment.name}</strong></p>
				<div>
					{comment.body}
				</div>
			</div>
		</div>
	);
}

export default Comment;
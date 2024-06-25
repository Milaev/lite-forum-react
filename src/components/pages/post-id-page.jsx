import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../api/post-service';
import Loader from '../UI/loader/loader';
import CommentsList from '../comments-list/comments-list';
import NotFoundPage from './not-found-page/not-found-page';

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [isValidId, setIsValidId] = useState(true);

	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		try {
      const response = await PostService.getById(id);
      setPost(response.data);
    } catch (error) {
      setIsValidId(false);
    }
	});

	const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
		const response = await PostService.getCommentsById(id);
		setComments(response.data);
	});

	useEffect(() => {
		fetchPostById(params.id);
		fetchComments(params.id);
	}, []);

	if (!isValidId) {
    return <NotFoundPage />;
  }

	return (
		<div>
			<h1>Пост с id {params.id}</h1>
			{isLoading
				? <Loader />
				:
				<div className="post__content">
					<p><strong>Пользователь: {post.id}</strong></p>
					<p><strong>Тема: {post.title}</strong></p>
					<div>
						{post.body}
					</div>
				</div>
			}
			{isCommentsLoading
				? <Loader />
				: <CommentsList
						comments={comments}
					/>
			}
		</div>
	)
}

export default PostIdPage

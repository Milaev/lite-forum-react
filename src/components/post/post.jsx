import { useNavigate } from 'react-router-dom';
import MyButton from '../UI/my-button/my-button';

export default function Post({post, remove}) {
	const navigate = useNavigate();
	return (
		<div className="post">
			<div className="post__content">
				<p><strong>Пользователь: {post.id}</strong></p>
				<p><strong>Тема: {post.title}</strong></p>
				<div>
					{post.body}
				</div>
			</div>
			<div className="post__btn">
				<MyButton onClick={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
				<MyButton onClick={() => remove(post)}>Удалить</MyButton>
			</div>
		</div>
	);
}
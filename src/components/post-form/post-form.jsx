import { useState } from 'react';
import MyButton from '../UI/my-button/my-button';
import MyInput from '../UI/my-input/my-input';

export default function PostForm({create}) {
  const [post, setPost] = useState({title: '', text: ''});

	function addNewPost(evt) {
    evt.preventDefault();
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost);
		setPost({title: '', text: ''});
  }

	return (
		<form>
			<MyInput
				value={post.title}
				onChange={(evt) => setPost({ ...post, title: evt.target.value })}
				type="text"
				placeholder="Название поста"
			/>
			<MyInput
				value={post.body}
				onChange={(evt) => setPost({ ...post, body: evt.target.value })}
				type="text"
				placeholder="Описание поста"
			/>
			<MyButton onClick={addNewPost}>Добавить пост</MyButton>
		</form>
	)
}
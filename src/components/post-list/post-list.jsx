import Post from '../post/post';

export default function PostList({posts, title, remove}) {
	
  if(!posts.length) {
    return (
      <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
    )
  }
  
  return (
		<div>
			<h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      {posts.map((post) => 
        <Post
          key={post.id}
          post={post}
					remove={remove}
        />
      )}
		</div>
	)
}

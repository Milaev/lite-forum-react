import React, { useEffect, useState } from 'react';
import '../../styles/App.css'
import PostList from '../post-list/post-list';
import PostForm from '../post-form/post-form';
import PostFilter from '../post-filter/post-filter';
import Modal from '../UI/modal/modal';
import MyButton from '../UI/my-button/my-button';
import { usePosts } from '../../hooks/usePost';
import PostService from '../../api/post-service';
import Loader from '../UI/loader/loader';
import { useFetching } from '../../hooks/useFetching';
import { getPageCount } from '../../utils/pages';
import Pagination from '../UI/pagination/pagination';

function PostPage() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimitCount] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  
  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '10px'}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <Modal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm
          create={createPost}
        />
      </Modal>
      <hr style={{ margin: '15px 0', borderColor: 'green' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <h1>Произошла ошибка: ${postError}</h1>
      }
      {isPostLoading
        ? <div style={{display:'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default PostPage;

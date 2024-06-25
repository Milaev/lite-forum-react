import About from '../../pages/about';
import Login from '../../pages/login';
import PostIdPage from '../../pages/post-id-page';
import PostPage from '../../pages/post-page';

export const PRIVATE_ROUTES = [
  { path: '/', element: <PostPage />, exact: true },
  { path: '/about', element: <About />, exact: true },
  { path: '/posts', element: <PostPage />, exact: true },
  { path: '/posts/:id', element: <PostIdPage />, exact: true },
];

export const PUBLIC_ROUTES = [
  { path: '/login', element: <Login />, exact: true },
]

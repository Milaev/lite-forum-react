import './not-found-style.css';
import {Link} from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oops! The page was not found.</p>
        <Link to='/posts'>Go to the main page!</Link>
      </div>
    </div>
  );
}

import './Header.css';
import * as userService from '../../utilities/users-service';
import { Link } from 'react-router-dom';

const Header = ({ user, setUser }) => {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const handleLogin = () => {
    userService.login();
    setUser(null);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light rounded-nav">
      <div className="container">
        <Link to="/" className="navbar-brand fs-2 fw-bold">Headlines</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {user ? (
            <div className="d-flex align-items-center ms-3">
              <h6 className="mb-0 me-3">{user.name}</h6>
              <button className="btn btn-primary" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          ) : (
            <button className="btn btn-primary ms-auto" onClick={handleLogin}>
              Log In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

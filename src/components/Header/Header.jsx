import './Header.css';
import * as userService from '../../utilities/users-service';

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
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Headlines
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="form-inline ml-auto">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          {user ? (
            <div className="ml-auto">
              <h5 className="mr-3 my-auto">{user.name}</h5>
              <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          ) : (
            <button className="btn btn-primary ml-auto" onClick={handleLogin}>
              Log In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

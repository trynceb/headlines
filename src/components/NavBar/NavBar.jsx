import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

const NavBar = ({ user, setUser }) => {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  const handleLogin = () => {
    userService.login()
    setUser(null)
    
  }

  return (
    <nav>
      <h1>Welcome { user.name }</h1>
      <Link to='/orders'>Order History</Link>
      &nbsp; | &nbsp;
      <Link to='/orders/new'>New Order</Link>
      &nbsp; | &nbsp;
      {user ? (
        <Link to='' onClick={handleLogOut}>Log Out</Link> 
      ) : (
        <Link to='' onClick={handleLogin}>Log In</Link>
      )}
    </nav>
  )
}

export default NavBar
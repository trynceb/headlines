import './Header.css'
import * as userService from '../../utilities/users-service'

const Header = ({ user, setUser }) => {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  const handleLogin = () => {
    userService.login()
    setUser(null)
    
  }

  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <form class="search-container form-inline">
          <input class="search-input form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="search-button btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        {user ? (
          <>
            <h1 class="navbar-brand mr-auto">{ user.name }</h1>
            <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleLogOut}>Log Out</button> 
          </>
        ) : (
          <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleLogin}>Log In</button>
        )}
      </div>
    </nav>
  )
}

export default Header








    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <div class="container">
    //     <h1 class="navbar-brand">{ user.name }</h1>
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav ml-auto">
    //         <li class="nav-item">
    //           <Link class="nav-link" to='/home'>Headlines</Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link class="nav-link" to='/saved'>Saved</Link>
    //         </li>
    //         {user ? (
    //           <li class="nav-item">
    //             <Link class="nav-link" to='' onClick={handleLogOut}>Log Out</Link> 
    //           </li>
    //         ) : (
    //           <li class="nav-item">
    //             <Link class="nav-link" to='' onClick={handleLogin}>Log In</Link>
    //           </li>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
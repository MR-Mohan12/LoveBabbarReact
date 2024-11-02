import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/Logo-Full-Light.png'
import './Navbar.css';
import toast from 'react-hot-toast';
// import logo from '../assests/Logo-Full-Light.png'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='navbar '>
      <Link to="/">
       <img src={logo} alt='logoImg' width={160} height={32} loading='lazy'/>
      </Link>
         
         <nav>
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/">About Us</Link></li>
          </ul>

         </nav>
      
      <div className='navbar-btn'>
     { !isLoggedIn && 
      <Link to='/login'><button>Login</button></Link>
     }
      { !isLoggedIn &&
      <Link to='/signup'><button >Signup</button></Link>
     }
      { isLoggedIn &&
      <Link to='/'><button onClick={()=>{setIsLoggedIn(false);  toast.success("Logged Out")}}>Logout</button></Link>
     }
      { isLoggedIn &&
      <Link to='/dashboard'><button>Dashboard</button></Link>
     }
      </div>

    </div>
  )
}

export default Navbar

import {Routes,Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import Home from './Home'
import User from './User'
import Vendor from './Vendor'

export default function Navbar() { 

  return ( 
    <>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/user">User</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/vendor">Vendor</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <Routes>
        <Route path='/register' element={<SignupForm/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/vendor' element={<Vendor/>}/>
    </Routes>
    </>
  )
}

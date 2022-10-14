import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { BsBoxArrowInLeft } from "react-icons/bs";



export const Navbar = () => {

    const { user, logout } = useContext( AuthContext );
    console.log('user: ', user);

    const navigate = useNavigate();

    const onLogout = () =>{
        console.log('logout');
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Informacion
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/clima"
                    >
                        Clima
                    </NavLink>

                    {/*<NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        Search
                    </NavLink> */} 
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className="nav-item nav-link text-primary">
                        {/* { user?.name } */} 
                        {/* Cristian */} 
                        { user?.name }
                    </span>

                    <button
                      className="nav-item nav-link btn"
                      onClick={ onLogout }
                    >
                        Logout <BsBoxArrowInLeft></BsBoxArrowInLeft>
                    </button>

                </ul>
            </div>
        </nav>
    )
}
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from "../../assets/courier ui/ROYAL EXPRESS.png"

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <ScrollLink
                                    to="services-section"
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    activeClass="active"
                                >
                                    Services
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="pricing-section"
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    activeClass="active"
                                >
                                    Pricing
                                </ScrollLink>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <img className='w-2/3' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <ScrollLink
                                to="services-section"
                                smooth={true}
                                duration={500}
                                offset={-100}
                                activeClass="active"
                            >
                                Services
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="pricing-section"
                                smooth={true}
                                duration={500}
                                offset={-100}
                                activeClass="active"
                            >
                                Pricing
                            </ScrollLink>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <>
                            <button className="btn btn-warning">
                                <Link to="/dashboard">Dashboard</Link>
                            </button>
                            <button onClick={handleLogOut} className="btn btn-error mx-4">
                                LogOut
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="btn btn-success">
                                <Link to="/register">Register</Link>
                            </button>
                            <button className="btn btn-primary mx-4">
                                <Link to="/login">Login</Link>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;

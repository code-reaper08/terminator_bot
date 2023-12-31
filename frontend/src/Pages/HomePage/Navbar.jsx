import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';

export default function Navbar() {
    return (
        <div >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></link>

            <nav style={{ backgroundColor: '#5A287D' }} className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand mx-2" href="#">
                        <img src="https://www.natwestgroup.com/content/dam/championlogos/Logo_Wh_NatWestGroupColleague-Hor.svg" alt="Logo" height="50" />
                    </a>
                    <button className="navbar-toggler"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className='nav-link active' to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link active' to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link active' to="/career">Careers</Link>
                            </li>
                           
                        </ul>
                        <form className="d-flex">
                            
                        <Link className="btn btn-primary ternary-bg" to="/login">Login</Link>
                        </form>
                    </div>
                </div>
            </nav>

            <Home/>
            <Footer/> 
        </div>
    );
}
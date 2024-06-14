import Cu from '../assets/images/logoCu.png';
import Links from './links/links.jsx';
import Link from 'next/link';
import Image from 'next/image';


function Navbar() {
    return (
    <>
        <div className=''>
            <nav className='navbar navbar-expand-lg bg-light bd-gutter flex-wrap  fixed-top'>
                <div className='container-fluid'>
                    <Link style={{}} href='/'>
                        <Image src={Cu} alt='Logo' style={{width: '100px', height: 'auto' }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className='nav-item dropdown'>
                                <Link className='nav-link dropdown-toggle' href='#' id='navBarDropddown' role='button' data-bs-toggle = 'dropdown' aria-expanded='false'>
                                    Account
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
                                    <li className="">
                                        <Link className='dropdown-item' href='/login'>
                                            Login
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className='dropdown-item' href='/register'>
                                            Sign up
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <br />
        <br />
        <br />
        </>


    )
}

export default Navbar;

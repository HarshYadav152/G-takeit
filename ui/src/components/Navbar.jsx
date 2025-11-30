// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar(props) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('token') ? true : false);
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push("/login");
  };
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${router.pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${router.pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
              </li>
            </ul>
            {!isLoggedIn ? 
              <div className="d-flex">
                <Link className="btn btn-primary mx-2" href='/login'>Login</Link>
                <Link className="btn btn-primary mx-2" href='/signup'>Signup</Link>
              </div> : 
              <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}
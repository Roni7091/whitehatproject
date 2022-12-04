import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <a className="navbar-brand">
    <Link to={"/home"}><img src="https://s3-cdnwhjr.whjr.online/website/desktop/logo_whjr.png" alt="Whitehatjr logo" width="150" height="60"></img></Link>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Curriculum + Pricing
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Beginner (Grade 1)</a></li>
            <li><a className="dropdown-item" href="#">Intermediate (Grade 2-3)</a></li>
            <li><a className="dropdown-item" href="#">Advanced (Grade 4-6)</a></li>
            <li><a className="dropdown-item" href="#">Professional (Grade 7-9)</a></li>
            <li><a className="dropdown-item" href="#">Applied Tech (Grade 10+)</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses: <span Style="color:#FFA500;">Coding</span>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"><img src="https://www.whitehatjr.com/desktop-home/coding.svg"></img>Coding</a></li>
            <li><a className="dropdown-item" href="#"><img src="https://www.whitehatjr.com/desktop-home/math.svg"></img>Math</a></li>
            <li><a className="dropdown-item" href="#"><img src="https://www.whitehatjr.com/desktop-home/music.svg"></img>Music(kids)</a></li>
            <li><a className="dropdown-item" href="#"><img src="https://www.whitehatjr.com/desktop-home/music.svg"></img>Music (Age 18+)</a></li>
            <li><a className="dropdown-item" href="#"><img src="https://s3-cdnwhjr.whjr.online/website/art_landing/desktop/art-icon.svg"></img> Art, Animation & Video <span Style="color:#00FF00;">NEW</span></a></li>
          </ul>
        </li>
      </ul>
    <div className="buttons">
      <div className="button1">
      <Link to={"/login"}><button className="but1" data-loginflow="0">Join Class Now</button>
      </Link>
        <span className="opt">Already Booked a Class ?</span>
      </div>
      <Link to={"/freetrial"}><button className="button2"><FaCalendarAlt /> Book a FREE Trial</button></Link>

    </div>
    </div>
    </div>
</nav>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</div>



  );
}; 

export default Navbar;
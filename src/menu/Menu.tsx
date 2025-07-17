import "bootstrap/js/src/collapse.js";
import { Link } from "react-router-dom";
import './Menu.scss';

const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand mx-auto" to="/">
            Nathan Heckman
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle Navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link hover" to="/home">Home</Link>
      <Link className="nav-item nav-link hover" to="/resume">Resume</Link>
      <Link className="nav-item nav-link hover" to="/certifications">Certifications</Link>
      <Link className="nav-item nav-link hover" to="/projects">Projects</Link>
      <Link className="nav-item nav-link hover" to="/photos">Photos</Link>
      <Link className="nav-item nav-link hover" to="/contact">Contact</Link>
    </div>
  </div>
</nav>
  </>
  );
};

export default Menu;

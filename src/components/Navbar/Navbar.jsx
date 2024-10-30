import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>COOLOR</h1>
        </div>
        <ul className="navbar-links">
          <a href="#">Tools</a>
          <a href="#">GO Pro</a>
          <div>
            <button className="nav-btn1">Sign In</button>
            <button className="nav-btn2">Sign Up </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar
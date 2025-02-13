const Header = () => {
  return (
    <div className="top-bar">
      {/* Logo */}
      <div className="logo">
        📖 BigBook
      </div>

      {/* Liens de navigation */}
      <div className="nav-links">
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      {/* Bouton d'inscription */}
      <button className="register-btn">Register</button>
    </div>
  );
};

export default Header;

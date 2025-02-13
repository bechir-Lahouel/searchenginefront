import { FaBars, FaBook } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <h1>
        <FaBook /> Bibliothèque en ligne
      </h1>
      <FaBars style={{ cursor: "pointer" }} />
    </header>
  );
};

export default Header;

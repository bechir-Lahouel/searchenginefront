import { FaBookOpen, FaHeadphones, FaStar, FaHeart, FaMagic, FaTheaterMasks, FaChild, FaMusic, FaDragon, FaArtstation } from "react-icons/fa";
import { BookContext } from '../context/BookContext';
import { useContext } from "react";

const categories = [
  { icon: <FaArtstation />, text: "Arts & Architect" },
  { icon: <FaChild />, text: "Children" },
  { icon: <FaBookOpen />, text: "History" },
  { icon: <FaHeart />, text: "Romance" },
  { icon: <FaMusic />, text: "Music" },
  { icon: <FaDragon />, text: "Fantasy" },
];

const Categories = () => {
    const { setFilters } = useContext(BookContext)!;
  
  return (
    <div className="category-section">
      <h2>Select from category</h2>
      <div className="category-container">
        {categories.map((cat, index) => (
          <div key={index} className="category-card" onClick={() => setFilters(prevFilters => ({ ...prevFilters, subject: cat.text })) }>
            <div className="category-icon">{cat.icon}</div>
            <p>{cat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

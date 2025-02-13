import { FaBookOpen, FaHeadphones, FaStar, FaHeart, FaMagic, FaTheaterMasks } from "react-icons/fa";

const categories = [
  { icon: <FaBookOpen />, text: "Arts & Architect" },
  { icon: <FaHeadphones />, text: "Children" },
  { icon: <FaStar />, text: "History" },
  { icon: <FaHeart />, text: "Romance" },
  { icon: <FaMagic />, text: "Music" },
  { icon: <FaTheaterMasks />, text: "Fantasy" },
];

const Categories = () => {
  return (
    <div className="category-section">
      <h2>Select from category</h2>
      <div className="category-container">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <div className="category-icon">{cat.icon}</div>
            <p>{cat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

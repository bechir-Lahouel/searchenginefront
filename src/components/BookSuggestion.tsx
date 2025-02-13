import { FaStar } from "react-icons/fa";

interface BookProps {
  title: string;
  rating: number;
}

const BookSuggestion = ({ title, rating }: BookProps) => {
  return (
    <div className="book-card">
      <h2 className="book-title">{title}</h2>
      <div className="stars">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar key={index} color={index < rating ? "gold" : "#ddd"} />
        ))}
      </div>
      <input type="text" placeholder="Donnez votre avis" />
    </div>
  );
};

export default BookSuggestion;

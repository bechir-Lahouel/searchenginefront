interface BookProps {
  title: string;
  author: string;
  cover: string;
  price: string;
}

const BookSuggestion = ({ title, author, cover, price }: BookProps) => {
  return (
    <div className="book-card">
      <div
        className="book-cover"
        style={{ backgroundImage: `url(${cover})` }}
      ></div>
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <p className="book-price">{price}</p>
      </div>
    </div>
  );
};

export default BookSuggestion;

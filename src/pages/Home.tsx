import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import BookSuggestion from "../components/BookSuggestion";
import Footer from "../components/Footer";

const Home = () => {
  const books = [
    { title: "Joy at Work", author: "Marie Kondo", cover: "https://via.placeholder.com/150x200?text=Joy+at+Work", price: "$22.99" },
    { title: "Such a Fun Age", author: "Kiley Reid", cover: "https://via.placeholder.com/150x200?text=Such+a+Fun+Age", price: "$16.89" },
    { title: "Brief Answers", author: "Stephen Hawking", cover: "https://via.placeholder.com/150x200?text=Brief+Answers", price: "$16.50" },
    { title: "The Death of Jesus", author: "J.M. Coetzee", cover: "https://via.placeholder.com/150x200?text=The+Death+of+Jesus", price: "$19.99" },
    { title: "Surrounded by Idiots", author: "Thomas Erikson", cover: "https://via.placeholder.com/150x200?text=Surrounded", price: "$13.99" },
  ];

  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <section className="popular-section">
        <h2>New</h2>
        <div className="popular-books">
          {books.map((book, index) => (
            <BookSuggestion key={index} {...book} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

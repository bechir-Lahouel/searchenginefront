import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BookSuggestion from "../components/BookSuggestion";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <section className="suggestions">
        <BookSuggestion title="Le Seigneur des Anneaux" rating={4} />
        <BookSuggestion title="L'Odyssée" rating={5} />
        <BookSuggestion title="1984" rating={4} />
        <BookSuggestion title="les misérables" rating={5} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;

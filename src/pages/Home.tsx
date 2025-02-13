import React, { useContext } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import BookSuggestion from '../components/BookSuggestion';
import Footer from '../components/Footer';
import FilterComponent from '../components/FilterComponent';
import { BookContext } from '../context/BookContext';

const Home: React.FC = () => {
    const { books } = useContext(BookContext)!;

    return (
        <div>
            <Header />
            <Banner />
            <FilterComponent />
            <Categories />
            <section className="popular-section">
                <h2>New</h2>
                <div className="popular-books">
                    {books.map((book, index) => (
                        <BookSuggestion
                            key={index}
                            title={book.title}
                            author={book.authors.map(author => author.name).join(', ')}
                            cover={book.formats['image/jpeg'] || 'default-cover-url'}
                            subjects={book.subjects}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;


import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchBooks } from '../services/api';

interface Book {
    id: number;
    title: string;
    authors: { name: string }[];
    languages: string[];
    // Ajoutez d'autres champs si nécessaire
}

interface BookContextType {
    books: Book[];
    setFilters: React.Dispatch<React.SetStateAction<{ language: string }>>;
}

export const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
    const [books, setBooks] = useState<Book[]>([]);
    const [filters, setFilters] = useState({ language: '' });

    useEffect(() => {
        fetchBooks().then(data => setBooks(data));
    }, []);

    const filteredBooks = books.filter(book =>
        filters.language ? book.languages.includes(filters.language) : true
    );

    return (
        <BookContext.Provider value={{ books: filteredBooks, setFilters }}>
            {children}
        </BookContext.Provider>
    );
};

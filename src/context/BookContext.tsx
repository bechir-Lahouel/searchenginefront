import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchBooks } from '../services/api';

interface Book {
    id: number;
    title: string;
    authors: { name: string }[];
    languages: string[];
    subjects?: string[];
    formats: { [key: string]: string };
}

interface BookContextType {
    books: Book[];
    setFilters: React.Dispatch<React.SetStateAction<{ language: string; subject: string, title: string }>>;
}

export const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
    const [books, setBooks] = useState<Book[]>([]);
    const [filters, setFilters] = useState({ language: '', subject: '', title: ''});

    useEffect(() => {
        fetchBooks().then(data => setBooks(data));
    }, []);

    const filteredBooks = books.filter(book =>
        (filters.language ? book.languages.includes(filters.language) : true) &&
        (filters.subject ? book.subjects?.some(sub => sub.toLowerCase().includes(filters.subject.toLowerCase())) : true) &&
        (filters.title ? book.title.toLowerCase().includes(filters.title.toLowerCase()) : true)
    );

    return (
        <BookContext.Provider value={{ books: filteredBooks, setFilters }}>
            {children}
        </BookContext.Provider>
    );
};

import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const FilterComponent: React.FC = () => {
    const { setFilters } = useContext(BookContext)!;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    };

    return (
        <div className="filter-component">
            <label>
                Language:
                <select name="language" onChange={handleChange}>
                    <option value="">All</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="ar">French</option>
                    <option value="zh">French</option>
                    <option value="nl">French</option>
                    <option value="de">French</option>
                    <option value="ru">French</option>
                    <option value="es">French</option>
                    {/* Ajoutez d'autres langues selon vos besoins */}
                </select>
            </label>
            <label>
                Subject:
                <input type="text" name="subject" placeholder="Enter subject" onChange={handleChange} />
            </label>
        </div>
    );
};

export default FilterComponent;

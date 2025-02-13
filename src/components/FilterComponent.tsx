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
                    <option value="ar">Arabic</option>
                    <option value="zh">Chinese</option>
                    <option value="nl">Dutch</option>
                    <option value="de">German</option>
                    <option value="ru">Russian</option>
                    <option value="es">Spanish</option>
                    {/* Ajouter d'autres langues si besoin */}
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

import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const FilterComponent: React.FC = () => {
    const { setFilters } = useContext(BookContext)!;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
                    {/* Ajoutez d'autres langues selon vos besoins */}
                </select>
            </label>
            {/* Ajoutez d'autres filtres comme l'auteur, le sujet, etc. */}
        </div>
    );
};

export default FilterComponent;

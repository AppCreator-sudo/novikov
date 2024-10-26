// Categories.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Импортируем CSS файл, если еще не импортирован

const Categories = () => {
    const categories = [
        { name: 'Закуски', path: 'snacks' },
        { name: 'Хинкали', path: 'khinkali' },
        { name: 'Горячее', path: 'hot-dishes' },
        { name: 'Салаты', path: 'salads' },
        { name: 'Супы', path: 'soups' },
        { name: 'На гриле', path: 'grilled' },
        { name: 'Хачапури', path: 'khachapuri' },
        { name: 'Выпечка', path: 'pastries' },
        { name: 'Гарниры', path: 'garnishes' },
        { name: 'Десерты', path: 'desserts' },
        { name: 'Соусы', path: 'sauces' },
        { name: 'На компанию', path: 'for-company' },
        { name: 'Детское меню', path: 'children' },
    ];

    return (
        <div className="categories-container">

            <ul className="category-list">
                {categories.map((category) => (
                    <li key={category.path}>
                        <Link to={`/kitchen-menu/${category.path}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;

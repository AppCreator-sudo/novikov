import React from 'react';
import { useParams } from 'react-router-dom';
import dishes from './dishes'; // Предполагаем, что вы импортируете блюда отсюда

const DishList = () => {
    const { category } = useParams();
    const filteredDishes = dishes.filter(dish => dish.category === category);

    return (
        <div>
            {/* Удаляем заголовок категории */}
            {/* <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3> */}
            {filteredDishes.length === 0 ? (
                <p>В этой категории нет блюд.</p>
            ) : (
                <ul>
                    {filteredDishes.map(dish => (
                        <li key={dish.id}>
                            <div className="dish"> {/* Оборачиваем карточку в div с классом dish */}
                                <img src={dish.image} alt={dish.name} />
                                <h3>{dish.name}</h3>
                                <p>{dish.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DishList;

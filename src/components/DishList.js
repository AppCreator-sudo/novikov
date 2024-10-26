import React from 'react';
import { useParams } from 'react-router-dom';
import dishes from './dishes';

const DishList = () => {
    const { category } = useParams();
    const filteredDishes = dishes.filter(dish => dish.category === category);

    return (
        <div>
            {filteredDishes.length === 0 ? (
                <p>В этой категории нет блюд.</p>
            ) : (
                <ul>
                    {filteredDishes.map(dish => (
                        <li key={dish.id}>
                            <div className="dish">
                                <img src={dish.image} alt={dish.name} />
                                <h3>{dish.name}</h3>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: dish.description
                                    }}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DishList;

import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import SideBar from '../SideBar/SideBar';
import './FoodContainer.css';

const FoodContainer = () => {
    const [meals, setMeals] = useState([]);
    const [selectedFood, setSelectedFood] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
            const data = await res.json();
            setMeals(data.meals);
        }

        fetchData()
            // make sure to catch any error
            .catch(err => console.log(err))
    }, []);

    const handleSelectButton = meal => {
        // console.log(typeof strMeal);
        console.log(meal);
        setSelectedFood(meal);
    }

    return (
        <div className="container">
            <div className='main-container'>
                <h2>Available Meals</h2>
                <div className="meals-container">
                    {
                        meals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                            handleSelectButton={handleSelectButton}
                        />)
                    }
                </div>
            </div>
            <SideBar selectedFood={selectedFood} />
        </div>
    );
};

export default FoodContainer;
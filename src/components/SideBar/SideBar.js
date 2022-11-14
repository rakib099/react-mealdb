import React from 'react';
import './SideBar.css';

const SideBar = ({ selectedFood }) => {
    const { strMealThumb, strMeal, strArea, strCategory } = selectedFood;

    return (
        <div className="side-bar">
            <div className="items">
                <h2 className='title'>Food Info:</h2>
                <h3>Selected Food:</h3>
                <img src={strMealThumb} alt="" />
                <div className="name-holder">
                    <h4 className='name'>Name:</h4>
                    <h4 className='selected'><span>{strMeal}</span></h4>
                </div>
                <h4 className='selected'>Category: <span>{strCategory}</span></h4>
                <h4 className='selected'>Area: <span>{strArea}</span></h4>
            </div>
        </div>
    );
};

export default SideBar;
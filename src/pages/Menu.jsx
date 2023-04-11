import { useState, useEffect } from "react"
import {FaWindowClose} from 'react-icons/fa'


export const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const mealsUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const getMeals = async (url) => {
    const response = await fetch (mealsUrl)
    const data = await response.json();
    setMeals(data.categories)
  }
  useEffect(() => {
    getMeals(mealsUrl);
  },[]);

  
  return (
    <div className="menu-info">
      {meals.map((meal) => {
        const {idCategory, strCategory:title} = meal
        const mealName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`;
        const fetchMeals = async (url) => {
          const response = await fetch(mealName);
          const data = await response.json();
          if(data.meals){
            setDishes(data.meals)
          } else {
            setDishes([])
          }
        }
        return (
          <div key={idCategory}>
            <button className="meal-btn" onClick={()=> {
              setShowModal(currentShow => !currentShow)
              fetchMeals();
              }}>{title}</button>              
              {showModal ?
              <div className="modal">
                <FaWindowClose className='nav-icon' onClick={() => setShowModal(currentShow => !currentShow)} />
              {dishes.map((dish) => {
                const {idMeal, strMeal:name, strMealThumb:image, strIngredient1, strIngredient2, strIngredient3, strIngredient4} = dish;
                return (
                    <div className="modal-meal"  key={idMeal}>
                      <img className="modal-img" src={image} alt="" />
                      <h2>{name}</h2>
                      <p><span> Ingredients:</span> {strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}</p>
                      <p><span>Price:</span> ${(Math.abs(idMeal)/10000).toFixed(2)}</p>
                    </div>                    
                )
                })}
                </div>
              : null}
          </div>
        )
      })}
    </div>
    
  )
  
}

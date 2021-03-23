import React from 'react'
import { Link } from 'react-router-dom'
import './DisplayRecipe.css'

const DisplayRecipe = ({ id, name, personNb, cookTime, ingredients, step }) => {
  return (
    <Link to={`/recettes/${id}`}>
      <div className='displayRecipeCard'>
        <div className='name'>{name}</div>
        <div className='person-nb'>{personNb}</div>
        <div className='cook-time'>{cookTime}</div>
        <div className='ingredients'>{ingredients}</div>
        <div className='step'>{step}</div>
      </div>
    </Link>
  )
}
export default DisplayRecipe

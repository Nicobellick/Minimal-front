import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayRecipe from '../components/DisplayRecipe'
import './Recipes.css'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios
      .get(`/api/aux_fourneaux/categorie_recettes/recettes/`)
      .then(response => setRecipes(response.data))
  }, [])

  return (
    <div className='recipeCard'>
      {recipes.map(recipe => (
        <DisplayRecipe {...recipe} key={recipe.id} />
      ))}
    </div>
  )
}

export default Recipes

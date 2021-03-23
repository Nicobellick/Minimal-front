import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './DetailRecipe.css'

const DetailRecipe = () => {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    axios
      .get(`/api/aux_fourneaux/categorie_recettes/recettes/`)
      .then(response => setRecipe(response.data))
  }, [])

  return (
    <div>
      <p>{recipe.name}</p>
      <p>{recipe.person_nb}</p>
      <p>{recipe.cook_time}</p>
      <p>{recipe.ingredients}</p>
      <p>{recipe.step}</p>
      <Link to='/recettes'> Retour aux recettes</Link>
    </div>
  )
}

export default DetailRecipe

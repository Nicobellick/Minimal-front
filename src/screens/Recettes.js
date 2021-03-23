import React, { useState, useEffect } from 'react'
import './Recettes.css'
import axios from 'axios'

const Recettes = () => {
  const [recipe, setRecipe] = useState('')

  useEffect(() => {
    axios
      .get(
        'http://localhost:4242/api/aux_fourneaux/categorie_recettes/recettes'
      )
      .then(response => setRecipe(response.data))
  }, [])

  return (
    <div>
      <div className='titre-recette'>
        <p>Couscous Automnal</p>
      </div>
    </div>
  )
}
export default Recettes

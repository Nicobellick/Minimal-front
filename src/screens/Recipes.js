import { useState, useEffect } from 'react'
import axios from 'axios'
import './Aliments.css'

const Recipes = prevProps => {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios
      .get(
        `http://localhost:4242/api/aux_fourneaux/categorie_recettes/recettes=${prevProps.match.params.id}`
      )
      .then(response => setRecipes(response.data))
      .then(res => setIsLoading(true))
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className='all-aliments'>
          {recipes.map(alim => (
            <div className='card-ingredient'>
              <h2 className='name-ingredient'>{alim.name}</h2>
              <h3 className='title-ingredient'>{alim.title}</h3>
              <p className='description-aliment'>{alim.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div> En chargement </div>
      )}
    </div>
  )
}

export default Recipes

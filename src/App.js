import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminInterfaceHome from './admin/AdminInterfaceHome.js'
import AuxFourneaux from './screens/AuxFourneaux'
import Header from './components/Header'
import Conversion from './components/Conversion'
import Home from './screens/Home'
import './App.css'
import Recipes from './screens/DetailRecipe.js'
import DetailRecipe from './screens/DetailRecipe.js'

function App() {
  const [displayHeader, setDisplayHeader] = useState(true)
  return (
    <div className='App'>
      {displayHeader ? <Header /> : null}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aux_fourneaux' component={AuxFourneaux} />
        <Route path='/recettes' component={Recipes} />
        <Route path='/recettes/:id' component={DetailRecipe} />
        <Route path='/admin'>
          <AdminInterfaceHome setDisplayHeader={setDisplayHeader} />
        </Route>
      </Switch>
      <Conversion />
    </div>
  )
}

export default App

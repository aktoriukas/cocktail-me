import './css/index.css'

import Navigation from './Components/Navigation'
import About from './Pages/About'
import Cocktails from './Pages/Cocktails'
import Home from './Pages/Home'
import Background from './Components/Background'
import Carret from './Components/Carret'

import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  const [navOpen, setNavOpen] = useState(false)
  const [carretDirection, setCarretDirection] = useState(false)

  const toggleMenu = () => {
    setCarretDirection(!carretDirection)
    setNavOpen(!navOpen)
  }

  return (
    <Router>

      <div className="App">

        <Navigation open={navOpen} toggleMenu={toggleMenu} />

        <div className={`navigation-button ${carretDirection ? 'open' : 'close'}`}>
          <Carret click={toggleMenu} direction={carretDirection} />
        </div>

        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/cocktails' exact component={Cocktails} />

        </Switch>

        <Background />

      </div>

    </Router>
  );
}

export default App;

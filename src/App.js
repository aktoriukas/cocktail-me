import './css/index.css'

import Navigation from './Components/Navigation'
import About from './Pages/About'
import Cocktails from './Pages/Cocktails'
import Home from './Pages/Home'
import Background from './Components/Background'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
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

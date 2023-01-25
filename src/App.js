import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="react-app">
    <div className="dash-board-app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teams-matches/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App

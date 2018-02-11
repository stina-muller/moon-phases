import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'


import FullMoon from './FullMoon'
import NewMoon from './NewMoon'
import Home from './Home'

const App = () => {
  return (
    <div>
    {/* <h1>Moon Phaze</h1> */}
    <Router>
      <div>
      <Route exact path='/' component={Home} />  
      <Route path='/fullmoon' component={FullMoon} />
      <Route path='/newmoon' component={NewMoon} />
      </div>
    </Router>  
  </div>
  )
}

export default App


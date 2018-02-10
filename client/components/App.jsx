import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'


import FullMoon from './Full-Moon'
import NewMoon from './New-Moon'

const App = () => {
  return (
    <div>
    <h1>Moon Phaze</h1>
  
    <Router>
      <Route path='/' component={Full-Moon} />
      <Route path='/newmoon' component={New-Moon} />
    </Router>  
  </div>
  )
}

export default App


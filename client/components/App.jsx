import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'


import FullMoon from './FullMoon'
import NewMoon from './NewMoon'
import Home from './Home'
import WaxingGibbous from './WaxingGibous'
import WaxingCrescent from './WaxingCrescent'
import FirstQuarter from './FirstQuarter'
import WaningGibbous from './WaningGibbous'
import ThirdQuarter from './ThirdQuarter'
import WaningCrescent from './WaningCrescent';

const App = () => {
  return (
    <div>
    {/* <h1>Moon Phaze</h1> */}
    <Router>
      <div>
      <Route exact path='/' component={Home} />  
      <Route path='/full-moon' component={FullMoon} />
      <Route path='/new-moon' component={NewMoon} />
      <Route path='/waxing-gibbous' component={WaxingGibbous} />
      <Route path='/waxing-crescent' component={WaxingCrescent} />
      <Route path='/first-quarter' component={FirstQuarter} />
      <Route path='/waning-gibbous' component={WaningGibbous} />
      <Route path='/third-quarter' component={ThirdQuarter} />
      <Route path='/waning-crescent' component={WaningCrescent} />
      </div>
    </Router>  
  </div>
  )
}

export default App


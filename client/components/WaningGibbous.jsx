import React from 'react'

class WaningGibbous extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div>
        <div className='header'>
          <h1>Waning Gibbous</h1> 
          <div><a href='/#/'><div><img src="./images/moon1.webp" width='180' height='100'/></div></a></div>
        </div>    

        <div className='row'>
          <div className='item'>
            <img src="./images/6 waning gibous.png" width='150' height='150'/></div>
        
        <div className='item'>
          <h2>Introspect</h2>
            <h4>While your actions and their reactions are still clear in your memory, it’s a good time to reflect. This stage, like its waxing mirror, is also one for refining, but this time, instead of looking at events, and what you can do, think about how you feel. Again, the waning period is all about looking internally.
            </h4>
          </div>
        </div>  
            
    </div>

    )
  }
}

export default WaningGibbous

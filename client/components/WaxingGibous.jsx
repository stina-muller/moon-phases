import React from 'react'

class WaxingGibbous extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div>
        <div className='header'>
          <h1>Waxing Gibbous</h1> 
          <div><a href='/#/'><div><img src="./images/moon1.webp" width='180' height='100'/></div></a></div>
        </div>    

        <div className='row'>
          <div className='item'>
            <img src="./images/4 waxing gibous.png" width='150' height='150'/></div>
        
        <div className='item'>
          <h2>Refine and Hone</h2>
            <h4>The waxing gibbous moon is there when we are close to our goals, but we need to assess their viability. Perhaps your original desire is not possible at this time, but a different version of it is.
            </h4>
          </div>
        </div>  
            
    </div>

    )
  }
}

export default WaxingGibbous

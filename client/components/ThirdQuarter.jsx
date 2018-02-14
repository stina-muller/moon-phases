import React from 'react'

class ThirdQuarter extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div>
        <div className='header'>
          <h1>Third Quarter</h1> 
          <div><a href='/#/'><div><img src="./images/moon1.webp" width='180' height='100'/></div></a></div>
        </div>    

        <div className='row'>
          <div className='item'>
            <img src="./images/7 third quarter.png" width='150' height='150'/></div>
        
        <div className='item'>
          <h2>Release and let go</h2>
            <h4>After thinking carefully about your internal compass in the last phase, now it is time to release and let go of those habits and thought processes that hold you back. Forgive yourself and cleanse in preparation fro the next phase.
            </h4>
          </div>
        </div>  
            
    </div>

    )
  }
}

export default ThirdQuarter

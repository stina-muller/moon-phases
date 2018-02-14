import React from 'react'

class WaningCrescent extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div>
        <div className='header'>
          <h1>Waning Crescent</h1> 
          <div><a href='/#/'><div><img src="./images/moon1.webp" width='180' height='100'/></div></a></div>
        </div>    

        <div className='row'>
          <div className='item'>
            <img src="./images/7 third quarter.png" width='150' height='150'/></div>
        
        <div className='item'>
          <h2>Surrender</h2>
            <h4>This is a time for recuperation. To be fully open to the next cycle, one must completely be relieved from this one.
            </h4>
          </div>
        </div>  
            
    </div>

    )
  }
}

export default WaningCrescent

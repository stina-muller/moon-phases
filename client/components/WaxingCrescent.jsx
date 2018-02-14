import React from 'react'

class WaxingCrescent extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div>
        <div className='header'>
          <h1>Waxing Crescent</h1> 
          <div><a href='/#/'><div><img src="./images/moon1.webp" width='180' height='100'/></div></a></div>
        </div>    

        <div className='row'>
          <div className='item'>
            <img src="./images/2 waxing crescent.png" width='200' height='200'/></div>

        <div className='item'>
          <h2>Set Intentions</h2>
            <h4>This is a time for recuperation. To be fully open to the next cycle, one must completely be relieved from this one.
            </h4>
          </div>
        </div>  
            
    </div>

    )
  }
}

export default WaxingCrescent

import React from 'react'

class FirstQuarter extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div>
        <div className='header'>
          <h1>First Quarter</h1> 
          <div><a href='/#/'><div><img src="./images/moon1.webp" width='180' height='100'/></div></a></div>
        </div>    

        <div className='row'>
          <div className='item'>
            <img src="./images/3 first quarter.png" width='150' height='150'/></div>
        
        <div className='item'>
          <h2>Take Action</h2>
            <h4>When the moon looks as if its cut in half, it signals that action is ready to be taken. If we discover any obstacles that block our path, we must be steadfast and overcome them.
            </h4>
          </div>
        </div>  
            
    </div>

    )
  }
}

export default FirstQuarter

import React from 'react'

class NewMoon extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div>
        <div className='header'>
          <h1>New Moon</h1> 
          <div><a href='/#/'><div><img src="./images/moon1.webp" width='180' height='100'/></div></a></div>
        </div>    

        <div className='row'>
          <div className='item'>
            <img src="./images/1 new moon.png" width='150' height='150'/></div>
        
        <div className='item'>
          <h2>New Beginnings</h2>
            <h4>When the moon is invisible, it signals that all has been cleared, and it’s time to have a new beginning. It’s thought of as a good time to gather ideas, thoughts and plan ahead for the coming month or so.
            </h4>
          </div>
        </div>  
            
    </div>

    )
  }
}

export default NewMoon

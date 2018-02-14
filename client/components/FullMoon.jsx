import React from 'react'

class FullMoon extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div>
        <div className='header'>
          <h1>Full Moon</h1> 
          <div><a href='/#/'><div><img src="./images/moon1.webp" width='180' height='100'/></div></a></div>
        </div>    

        <div className='row'>
          <div className='item'>
            <img src="./images/5 full.png" width='150' height='150'/></div>
        
        <div className='item'>
          <h2>Harvest Endavors</h2>
            <h4>The full moon is also known as the harvest moon, and as the name suggests, it is a time to receive the gifts of your past intentions, and even of your current one - if you’re lucky. From this period, the moon will go from waxing to waning, signaling our journey to look inward instead of out.
            </h4>
          </div>
        </div>  
            
    </div>

    )
  }
}

export default FullMoon

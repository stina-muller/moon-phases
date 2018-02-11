import React from 'react'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div className="container">
        
        <div className="elements">
          <div><h1>Moon Phases</h1></div>
          <div><img src="./images/moon1.webp"/></div>
        </div>
      
      </div>
    )
  }
}

export default Home

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
          <div><h1>Luna Library</h1></div>
          <div><img src="./images/moon1.webp"/></div>
          
          <div className="littleMoon">
            <div className="babyMoon">
              <img src="./images/1 new moon.png" width="70" height="70"/><p>new moon</p>
            </div>

            <div className="babyMoon">
              <img src="./images/2 waxing crescent.png" width="70" height="70"/><p>waxing crescent</p>
            </div>

            <div className="babyMoon">
              <img src="./images/3 first quarter.png" width="70" height="70"/><p>first quarter</p>
            </div>
            
            <div className="babyMoon">
              <img src="./images/4 waxing gibous.png" width="70" height="70"/><p>waxing gibous</p>
            </div>
            
            <div className="babyMoon">
              <img src="./images/5 full.png" width="70" height="70"/><p>full moon</p>
            </div>
            
            <div className="babyMoon">
              <img src="./images/6 waning gibous.png" width="70" height="70"/><p>waing gibous</p>
            </div>
            
            <div className="babyMoon">
              <img src="./images/7 third quarter.png" width="70" height="70"/><p>third quarter</p>
            </div>
            
            <div className="babyMoon">
              <img src="./images/8 waning crescent.png" width="70" height="70"/><p>waning crescent</p>
            </div>
            
            <div className="babyMoon">
              <img src="./images/1 new moon.png" width="70" height="70"/><p>new moon</p>
            </div>
          </div>
          
          <div className="paragraph"><h4>The moon is one of our most prominent and ancient symbols. 
            It has shaped how we understand and track time, its movement controls the tides, and its rise into the sky signals the coming of night. 
            It has a marked association with femininity and fertility - for female menstrual cycles are roughly the same amount of time as a lunar phase. 
            All of these roles have cemented its relationship to us, and we see this in the way that the moon has made its way into our myths and culture.</h4></div>
        </div>
        
      </div>
    )
  }
}

export default Home

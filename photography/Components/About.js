import React from 'react'
import '../CssFiles/About.css'
import photo from '../image/bouquet.jpg'

function About() {
  return (
    <div className='container' style={{backgroundColor:'SlateGray'}}>
      
        <div className='row p-5'>
        <h2>About</h2>
        <div className='col-md-4 p-2'>
            <img className='aboutImage' src={photo}></img>
        </div>
        <div className='col-md-8'>
          
        <p className='textAlign'>
        Design and web design trends are always on the move. Creative folks from all around the world keep coming up with mind-blowing website layouts, bringing to life their best and most original ideas. So do the wedding photographers from the Flothemes community! No wonder, the new Flex builder allows them to easily materialize any concept or vision that they’ve had boiling in their mind for a while now, but couldn’t quite verbalize.

        Since we’re huge advocates of beautiful yet also functional website designs, we wanted to share this amazing collection of 16 inspirational photography websites (all built with Flothemes). They are meant to motivate and challenge you to create something as unique and personalized for your own website. With Flex, the sky is the limit!
        </p>
        </div>
        </div>
    </div>
  )
}

export default About
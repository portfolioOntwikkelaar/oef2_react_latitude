import React from 'react'
import './Hemisphere.css'
import northernPic from './image/afb.jpeg'
import southernPic from './image/afbb.png'

const hemisphereConfig = {
  Northern: {
text: 'it is northern hemisphere',
picture: northernPic
  },
  Southern: {
    text: 'it is southern hemisphere',
picture: southernPic
  }
}

const HemisphereDisplay = ({latitude}) => {
  // console.log(latitude)
  const hemisphere = latitude > 0 ? 'Nothern' : 'Southern'
  // const picture = latitude > 0 ? northernPic : southernPic;
  const {text, picture } = hemisphereConfig[hemisphere]
  return (
    <div className={hemisphere}>
      <div className='ui raised text container segment'>
      <div className='image'>

      <img src={picture} alt="hemisphere picture" />
      </div>
      <div className='ui teal bottom attached label'>
      { text }

      </div>
      </div>
      {/* Hey you are in Nothern hemisphere!! */}
    </div>
  )
}

export default HemisphereDisplay

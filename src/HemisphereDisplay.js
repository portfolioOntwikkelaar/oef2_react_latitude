import React from 'react'
import northernPic from './image/afb.jpeg'
import southernPic from './image/afbb.png'

const hemisphereConfig = {
  Northern: {

  },
  Southern: {
    
  }
}

const HemisphereDisplay = ({latitude}) => {
  // console.log(latitude)
  const hemisphere = latitude > 0 ? 'Nothern hemisphere' : 'Southern hemisphere'
  const picture = latitude > 0 ? northernPic : southernPic;
  return (
    <div>
      <img src={picture} alt="" />
      { hemisphere }
      {/* Hey you are in Nothern hemisphere!! */}
    </div>
  )
}

export default HemisphereDisplay

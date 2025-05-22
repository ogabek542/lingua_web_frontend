import React from 'react'
import LinguaPhoto from "../../assets/linguaPhoto.png";

const Header = () => {
  return (
    <div className='container border-2 border-red-600 flex items-center justify-between rounded-2xl px-2 py-1'>
      {/* logo vs title */}
      <div className='flex items-center justify-between'>
        <img className='w-[35px] h-[35px] object-cover' src={LinguaPhoto} alt="logo_image" />
        <p className='font-bold uppercase'>World Translate Service</p>
      </div>
      {/* screens types  */}
      <div>

      </div>
      {/* order button */}
      <div>

      </div>
    </div>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <div className='w-full h-[55px] bg-orange-600 flex items-center justify-start'>
        {/* logo */}
        <div className='w-fit h-fit'>
            <img src="./logo_black.png" alt="logo" loading='lazy' className='h-[25px] w-fit' />
        </div>
        {/* links */}
        <Link>Picker</Link>
    </div>
  )
}

export default TopBar
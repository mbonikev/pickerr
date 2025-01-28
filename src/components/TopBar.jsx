import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <div className='w-full flex items-center justify-center'>
        {/* logo */}
        <div className='w-fit'>
            <img src="./logo_black.png" alt="logo" loading='lazy' className='h-[25px] w-fit' />
        </div>
        {/* links */}
        <Link>Picker</Link>
    </div>
  )
}

export default TopBar
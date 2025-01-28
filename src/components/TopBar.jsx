import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <div className='w-full h-[30px] flex items-center justify-start'>
        {/* logo */}
        <div className='w-fit h-full'>
            <img src="./logo_black.png" alt="logo" loading='lazy' className='h-[25px] w-fit' />
        </div>
        {/* links */}
        <Link className='h-[] bg-yellow-500'>Picker</Link>
    </div>
  )
}

export default TopBar
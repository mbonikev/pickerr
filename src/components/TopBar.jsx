import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <div className='w-full h-[36px] flex items-center justify-start gap-1.5'>
        {/* logo */}
        <div className='w-fit h-full'>
            <img src="./logo_black.png" alt="logo" loading='lazy' className='h-[25px] w-fit' />
        </div>
        {/* links */}
        <div className='h-[20px] flex items-center justify-center bg-white'>Picker</div>
    </div>
  )
}

export default TopBar
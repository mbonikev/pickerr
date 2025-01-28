import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <div className='w-full h-[36px] flex items-center justify-start gap-1.5'>
        {/* logo */}
        <div className='w-fit h-full'>
            <img src="./logo_black.png" alt="logo" loading='lazy' className='h-[25px] w-fit' />
        </div>
        <div className='h-[20px] flex items-center justify-center bg-white px-2 rounded-xl text-sm font-medium text-textColorWeak'>V1.0</div>
        {/* links */}
        <div className='flex items-center justify-center px-4 gap-4'>
          <Link to="/" className='text-base'>Report</Link>
          <Link to="/" className='text-base'>Doc</Link>
          <Link to="/" className='text-base'></Link>
        </div>
    </div>
  )
}

export default TopBar
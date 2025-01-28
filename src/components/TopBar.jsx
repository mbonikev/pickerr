import React from 'react'

function TopBar() {
  return (
    <div className='w-full flex items-center justify-start'>
        {/* logo */}
        <div className='w-fit miw-[120px]'>
            <img src="./logo_black.png" alt="logo" loading='lazy' className='h-[20px]' />
        </div>
    </div>
  )
}

export default TopBar
import React from 'react'

function TopBar() {
  return (
    <div className='w-full flex items-center justify-start'>
        {/* logo */}
        <div className='w-fit min-w-[120px]'>
            <img src="./favicon.png" alt="logo" loading='lazy' className='h-[45px] w-fit' />
        </div>
    </div>
  )
}

export default TopBar
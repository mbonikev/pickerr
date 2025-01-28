import React from 'react'

function Home() {
  return (
    <div className='w-full h-svh flex'>
        {/* content */}
        <div className='flex-1 min-h-full'></div>
        {/* tweaks */}
        <div className='w-[32vw] max-w-[32vw] min-h-full bg-blue-500 p-2'>
          <div className='w-full h-full bg-white'></div>
        </div>
    </div>
  )
}

export default Home
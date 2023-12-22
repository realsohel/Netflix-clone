import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <h1 className="text-red-600  cursor-pointer text-4xl font-bold">NETFLIX</h1>
            <div className="space-x-2">
                <button className='text-white'>Sign In</button>
                <button className='bg-red-600 text-white cursor-pointer px-4 py-2 rounded hover:bg-red-700'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar

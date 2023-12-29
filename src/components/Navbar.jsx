import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'

const Navbar = () => {
    const{user , logout} = UserAuth();
    const navigate = useNavigate();

    // console.log(user)

    const handleLogout = async()=>{
        try {
            await logout()
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <Link to='/'>
                <h1 className="text-red-600  cursor-pointer text-4xl font-bold">NETFLIX</h1>
            </Link>
            {user?.email ?(
                <div className="space-x-2">
                    <Link to='/account'>
                        <button className='text-white'>
                            My Account
                        </button>
                    </Link>
                    <button className='bg-red-600 text-white cursor-pointer px-4 py-2 rounded hover:bg-red-700' onClick={handleLogout}>
                        Logout
                    </button>
                    
                </div>
                ):
                (
                <div className="space-x-2">
                <Link to='/login'>
                    <button className='text-white'>
                        Sign In
                    </button>
                </Link>
                <Link to='/signup'>
                    <button className='bg-red-600 text-white cursor-pointer px-4 py-2 rounded hover:bg-red-700'>
                        Sign Up
                    </button>
                </Link>
                </div>
                )
            }
        </div>
    )
}

export default Navbar

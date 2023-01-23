import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'
import './GetUserDetails.css'



function GetUserDetails() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(logout())
    }

    // console.log('user', user)
    return (
        <div>
            {!user ? <p className='text'>No user found</p> : (
                <>
                    <h1>User:{user?.user_name} </h1>
                    <h2>Email:{user?.user_email}</h2>
                    <button onClick={logOut}>logout</button>
                </>
            )}

        </div>
    )
}

export default GetUserDetails
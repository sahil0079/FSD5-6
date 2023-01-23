import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './GetUserDetails.css'



function GetUserDetails() {

    const user = useSelector(selectUser)
    console.log('user', user)
    return (
        <div>

        </div>
    )
}

export default GetUserDetails
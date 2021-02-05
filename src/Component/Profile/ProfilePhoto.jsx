import React from 'react'
import myPhoto from './photo.jpg'
import './style.css'

function ProfilePhoto() {
    return (
        
       <img src={myPhoto} alt="profile photo"  className='profilePhoto' />
    )
}

export default ProfilePhoto

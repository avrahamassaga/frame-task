import React from 'react'
import './ProfileImg.css'
import { avatar } from './ProfileData'
export default function ProfileImg(props) {
  const {SelectedFrame} =props;
  return (
    <div >
        <img className='Avater-img' src={avatar} alt="profile img" />
    </div>
  )
}

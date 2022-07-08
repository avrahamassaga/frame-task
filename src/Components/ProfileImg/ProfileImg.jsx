import React,{useRef} from 'react'
import './ProfileImg.css'

export default function ProfileImg(props) {
  const {imgSize,avatarImg} =props;
  
  return (
    <div className='avatar-Container'>
        <img className='Avater-img' src={avatarImg} alt="profile img" style={{width: `${imgSize}px`,height: `${imgSize}px`}}/>
    </div>
  )
}

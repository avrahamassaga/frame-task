import React,{useRef} from 'react'
import './ProfileImg.css'
import profile from "../../assets/profile/profile.jpg"
export default function ProfileImg(props) {
  const {imgSize} =props;
  
  return (
    <div className='avatar-Container'>
        <img className='Avater-img' src={profile} alt="profile img" style={{width: `${imgSize}px`}}/>
    </div>
  )
}

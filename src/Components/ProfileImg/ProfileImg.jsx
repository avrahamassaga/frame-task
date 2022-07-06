import React,{useRef} from 'react'
import './ProfileImg.css'
import { avatar } from './ProfileData'
export default function ProfileImg(props) {
  const {imgSize} =props;
  
  return (
    <div className='avatar-Container'>
        <img className='Avater-img' src={avatar} alt="profile img" style={{width: `${imgSize}px`}}/>
    </div>
  )
}

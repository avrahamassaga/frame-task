import React from 'react';
import ProfileImg from '../ProfileImg/ProfileImg.jsx' 
import FrameCover from './FrameCover.jsx';
import './FrameBoxStyle.css'
export default function FrameBox(props) {
  const {SelectedFrame,imgSize,setImgSize,avatarImg} =props;
  return (
    <div className='avatar-container'>
       <ProfileImg imgSize={imgSize} setImgSize={setImgSize} avatarImg={avatarImg}/>
       <FrameCover imgSize={imgSize} SelectedFrame={SelectedFrame}/>
    </div>
  )
}

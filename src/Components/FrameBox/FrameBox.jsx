import React from 'react';
import ProfileImg from '../ProfileImg/ProfileImg.jsx' 
import FrameCover from './FrameCover.jsx';
import './FrameBoxStyle.css'
export default function FrameBox(props) {
  const {SelectedFrame} =props;
  return (
    <div className='avatar-container'>
       <ProfileImg />
       <FrameCover SelectedFrame={SelectedFrame}/>
    </div>
  )
}

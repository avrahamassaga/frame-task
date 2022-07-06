import React from 'react'
import './FrameBoxStyle.css'
export default function FrameCover(props) {
    const {SelectedFrame,imgSize} =props;
  return (
    <div className='framecover'>
        <img className='frame-img' src={SelectedFrame} alt="" style={{width: `${(imgSize/100)*167}px`}}/>
    </div>
  )
}

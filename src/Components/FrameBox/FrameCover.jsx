import React from 'react'
import './FrameBoxStyle.css'
export default function FrameCover(props) {
    const {SelectedFrame} =props;
  return (
    <div className='framecover'>
        <img className='frame-img' src={SelectedFrame} alt="" />
    </div>
  )
}

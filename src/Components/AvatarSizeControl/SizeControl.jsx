import React from 'react'
import {ChencgeSize}from './SizeFunc'
import './ControlStyle.css'
export default function SizeControl(props) {
    const {imgSize,setImgSize}= props;
  return (
    <div className='controlPanel-container'>
        <br />
        <div className="contolPanel">
            <button onClick={()=>ChencgeSize(imgSize,setImgSize,1)}>+</button>
            <h2 className='size-number'>{imgSize+'px'}</h2>
            <button onClick={()=>ChencgeSize(imgSize,setImgSize,0)}>-</button>
        </div>
    </div>
  )
}

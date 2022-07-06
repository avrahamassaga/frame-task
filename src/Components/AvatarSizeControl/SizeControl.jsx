import React from 'react'
import {ChencgeSize}from './SizeFunc'
import './ControlStyle.css'
export default function SizeControl(props) {
    const {imgSize,setImgSize}= props;
  return (
    <div className='controlPanel-container'>
        <br />
        <h3>Size control</h3>
        <div className="contolPanel">
            <button onClick={()=>ChencgeSize(imgSize,setImgSize,1)}>+</button>
            <h2>{imgSize+'px'}</h2>
            <button onClick={()=>ChencgeSize(imgSize,setImgSize,0)}>-</button>
        </div>
    </div>
  )
}

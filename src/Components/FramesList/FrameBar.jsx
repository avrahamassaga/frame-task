import React from 'react'
import {frameList} from './FramesImg'
import './FrameBarStyle.css'
export default function FrameBar(props) {
    const {selectFrame}= props;

    function steFrame(val){
        selectFrame(val)
    }
  return (
    <div className='FrameListBox'>{
        frameList.map((val,i)=>{
            return(
                <div className="framePointer" key={i} onClick={()=>steFrame(val.img)}>
                    <img src={val.img} alt="feameImg" className='Frame-icons' />
                    <h2>{val.name}</h2>
                </div>
            )
        })
        }</div>
  )
}

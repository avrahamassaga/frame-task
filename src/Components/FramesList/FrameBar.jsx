import React from 'react'
import {frameList} from './FramesImg'
import './FrameBarStyle.css'
export default function FrameBar(props) {
    const {selectFrame}= props;

  return (
    <div>
        <br />
        <p>Chose yout frame:</p>
        <div className="FrameListBox">
        {frameList.map((val,i)=>{
            return(
                <div className="framePointer" key={i} onClick={()=>selectFrame(val.img)}>
                    <img src={val.img} alt="feameImg" className='Frame-icons' />
                    <p>{val.name}</p>
                </div>
            )
        })
        }
        </div>
        <p className='scroll-title'>&lt; &lt; Scroll &gt; &gt;</p>
    </div>
  )
}

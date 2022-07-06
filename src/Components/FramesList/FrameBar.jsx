import React from 'react'
import {frameList} from './FramesImg'
import './FrameBarStyle.css'
export default function FrameBar(props) {
    const {selectFrame}= props;

  return (
    <div>
        <br />
        <p>Choose your frame:</p>
        <div className="FrameListBox">
        {frameList.map((val,i)=>{
            return(
                <div className="framePointer" key={i} onClick={()=>val.name !== 'none' ?selectFrame(val.img): selectFrame(null)}>
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

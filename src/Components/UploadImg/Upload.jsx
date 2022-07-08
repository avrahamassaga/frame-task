import React from 'react'
import './UploadStyle.css'
export default function Upload(props) {
    const{setAvatar}=props;
    const UploadAvatar= (val)=>{
        setAvatar(URL.createObjectURL(val.files[0]));
    } 
  return (
    <div className='uplouad-container'>
        <label>Upload your photo</label>
        <br />
        <input type="file" onChange={(e)=>UploadAvatar(e.target)}/>
    </div>
  )
}

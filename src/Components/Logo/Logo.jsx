import React from 'react'
import './LogoStyle.css'
import logo from '../../assets/logo/logo.png'
export default function Logo() {
  return (
    <div className='logo-container'>
        <img src={logo} alt="logo"/>
    </div>
  )
}

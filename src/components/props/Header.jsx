/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../styles/Header.css'

export const Header = (props) => {
  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1>{props.header}</h1>
          <h6>{props.message}</h6>
        </div>
      </div>
    </>

  )
}

export default Header

    /* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../styles/Description.css'

// eslint-disable-next-line no-unused-vars
export const Description = (props) => {
  return (
    <>
        <div className='contain'>
            <div className='description-container'>
                <div className='image-container'>
                    <img src= {props.image}></img>
                </div>

                <div className='title'>
                    <div className='description'>
                        <h5>{props.head}</h5>
                        <p>{props.description}</p>  
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Description

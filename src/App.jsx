// import React from 'react'
import './App.css'
import Description from './components/props/Description'
import Header from './components/props/Header'


function App() {
  return (
    <>
      <Header header = 'Testimonial' message = 'Read what people are saying about us'/>
      <Description image = '/src/components/pictures/Giyu.png' head='Giyu Tomioka' description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima consequuntur aspernatur autem voluptas enim officia voluptatibus hic impedit in sit ipsum earum incidunt saepe inventore dicta, exercitationem repellendus facere!'/>
    </>
  )
}

export default App

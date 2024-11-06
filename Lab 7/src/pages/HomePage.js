import React from 'react'
import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import PopupMessage from '../components/PopupMessage/PopupMessage'

const MainPage = () => {
  return (
    <div>
          <Header></Header>
          
          <Content></Content>

          <PopupMessage></PopupMessage>
    </div>
  )
}

export default MainPage
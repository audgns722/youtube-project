import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Youtubers from './pages/Youtubers'
import Channel from './pages/Channel'
import Search from './pages/Search'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'




const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/today' element={<Today />} />
          <Route path='/youtubers' element={<Youtubers />} />
          <Route path='/channel/:channelId' element={<Channel />} />
          <Route path='/search/:searchId' element={<Search />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
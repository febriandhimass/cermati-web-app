import React, { useEffect } from 'react'
import Header from 'containers/Header'
import HighlightsPanel from 'containers/HighlightsPanel'
import Footer from 'containers/Footer'

const Home = () => {
  useEffect(() => {
    document.title = "Febrian Dhimas Syahfitra | Cermati.com Front-end Developer Entry Test"
  }, [])

  return (
    <div className="page-home">
      <Header/>
      <HighlightsPanel/>
      <Footer/>
    </div>
  )
}

export default Home
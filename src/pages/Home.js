import React, { useEffect } from 'react'
import Header from 'containers/Header'
import HighlightsPanel from 'containers/HighlightsPanel'
import Footer from 'containers/Footer'
import NotificationPanel from 'containers/NotificationPanel'
import NewsLetterPanel from 'containers/NewsletterPanel'

const Home = () => {
  useEffect(() => {
    document.title = "Febrian Dhimas Syahfitra | Cermati.com Front-end Developer Entry Test"
  }, [])

  return (
    <div id="page-home">
      <NotificationPanel/>
      <Header/>
      <HighlightsPanel/>
      <Footer/>
      <NewsLetterPanel/>
    </div>
  )
}

export default Home
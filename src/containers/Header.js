import React from 'react'
import { Container, Button } from 'reactstrap'

const logo = require('images/y-logo-white.png')

const Header = () => {
  return (
    <header id="pg-header">
      <Container>
        <div className="header-bar">
          <a href="/" className="header-logo">
            <img src={logo} alt="Logo" className="img-logo"/>
          </a>
        </div>
        <div className="hero-shot-panel">
          <h2 className="hero-shot-headline">Hello! I'm Febrian Dhimas Syahfitra</h2>
          <h3 className="hero-shot-subheadline">Consult, Design and Develop Websites</h3>
          <p className="hero-shot-subtitle">Have something great in mind? Feel free to contact me. <br/> 
            I'll help you to make it happen
          </p>
          <Button href="/" className="btn-action">LET'S MAKE CONTACT</Button>
        </div>
      </Container>
    </header>
  )
}

export default Header
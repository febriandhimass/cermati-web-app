import React, { useState } from 'react'
import { Container, Row, Col, Button, Input } from 'reactstrap'

const NewsLetterPanel = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickClose = () => {
    setIsClicked(true)
  }

  window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop
    if (scrollTop > 300) {
      document.getElementById("newsletter-panel").style.bottom = "0";
    }
  }

  return (
    <div isOpen={isClicked} id="newsletter-panel" className={isClicked ? 'closed' : ''}>
      <Container className="wrapper">
        <Row className="justify-content-end">
          <i className="fas fa-times" onClick={onClickClose}/>
        </Row>
        <h5 className="title">Get the latest update in web technologies</h5>
        <p className="text">
          I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.
        </p>
        <Row>
          <Col md={8} lg={9} xs={12}>
            <Input placeholder="Email address" className="input-email"/>
          </Col>
          <Col md={4} lg={3} xs={12}>
            <Button className="btn-action" href="/">Count me in!</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NewsLetterPanel;
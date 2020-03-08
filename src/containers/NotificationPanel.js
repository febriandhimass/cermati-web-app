import React, { useState } from 'react'
import { Container, Row, Button } from 'reactstrap'

const NotificationPanel = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickGotIt = () => {
    setIsClicked(true)
  }

  return (
    <div isOpen={isClicked} id="notification-panel" className={isClicked ? 'closed' : ''}>
      <Container>
        <Row className="justify-content-center">
          <div className="wrapper">
            <p className="text">
              By accessing and using this website, you acknowledge that you have read and understand our <a href="/" className="link">Cookie Policy</a>, <a href="/" className="link">Privacy Policy</a> and our <a href="/" className="link">Terms of Service</a>.
            </p>
            <Button className="btn-action" onClick={onClickGotIt}>Got it</Button>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default NotificationPanel
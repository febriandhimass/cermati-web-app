import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const panel = [
  {
    title: "Consult",
    icon: "fas fa-comments",
    text: "Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress."
  },
  {
    title: "Design",
    icon: "fas fa-paint-brush",
    text: "Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable."
  },
  {
    title: "Develop",
    icon: "fas fa-cubes",
    text: "Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking."
  },
  {
    title: "Marketing",
    icon: "fas fa-bullhorn",
    text: "Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustive resilient, uplift social transparent effective."
  },
  {
    title: "Manage",
    icon: "fas fa-tasks",
    text: "Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective atruism invest optimism corporate social."
  },
  {
    title: "Evolve",
    icon: "fas fa-chart-line",
    text: "Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game changer."
  }
]

const HighlightsPanel = () => {
  return (
    <section id="highlights-panel"> 
      <Container className="title">
        <Row className="justify-content-center">
          <h3 className="main-title">How Can I Help You?</h3>
        </Row>
        <Row className="justify-content-center">
          <p className="subtitle">
            Our work then targeted, best practices outcomes social innovation synergy.
            Venture philantropy, revolutionary policymaker relief. User-centered program areas scale.
          </p>
        </Row>
      </Container>
      <Container className="content">
        <Row>
          {panel.map((v, k) => (
            <Col lg={4} md={6} xs={12} className="col-panel" key={k}>
              <div className="panel">
                <Row>
                  <Col xs={10}><h5>{v.title}</h5></Col>
                  <Col xs={2} className="panel-icon"><i className={v.icon} /></Col>
                </Row>
                <p className="panel-text">{v.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default HighlightsPanel
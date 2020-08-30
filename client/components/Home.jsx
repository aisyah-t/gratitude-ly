import React from "react"
// import { Link } from "react-router-dom"
import "materialize-css"
import { Slider, Slide, Caption, Button, Row, Col } from "react-materialize"

const Home = () => {
  return (
    <Row className="container center">
      <Col className="center" s={12} m={12} l={12} xl={12}>
        <h2>Welcome to Gratitude-ly</h2>
        <Slider
          fullscreen={false}
          options={{
            duration: 2000,
            height: 450,
            indicators: true,
            interval: 5000,
          }}
        >
          <Slide
            className="center"
            image={
              <img
                alt="Background"
                src="../../images/typewriter-801921_1920.jpg"
              />
            }
          >
            <Caption className="caption-backdrop">
              <h5>
                Gratitude-ly is your personal prompt-based gratitude journal.
                Simply choose a prompt to add a journal entry and keep track of
                the good things in life.
              </h5>
            </Caption>
          </Slide>
          <Slide
            className="center"
            image={
              <img
                alt="Background"
                src="../../images/typewriter-801921_1920.jpg"
              />
            }
          >
            <Caption>
              <Button large node="a" waves="teal" href="/#/prompts">
                <strong>
                  <h6>GET STARTED: CHOOSE A PROMPT</h6>
                </strong>
              </Button>
            </Caption>
          </Slide>
        </Slider>
      </Col>
    </Row>
  )
}

export default Home

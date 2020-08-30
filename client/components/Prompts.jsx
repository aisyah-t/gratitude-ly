import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getPrompts } from "../apis/api"
import "materialize-css"
import { Slider, Slide, Caption, Row, Col } from "react-materialize"

const Prompts = () => {
  const [promptsData, setPrompts] = useState([])
  const [error, setError] = useState("Sorry, there isn't anything to display")

  useEffect(() => {
    const abortController = new AbortController()
    getPrompts()
      .then((data) => {
        return setPrompts(data)
      })
      .catch((err) => {
        return setError(err)
      })
    return () => abortController.abort()
    // Look into useEffect clean up function
  }, [])

  return (
    <Row className="container center">
      <Col className="center" s={12} m={12} l={12} xl={12}>
        <h4>Choose a prompt below to add an entry.</h4>
        <Slider
          fullscreen={false}
          options={{
            duration: 2000,
            height: 450,
            indicators: true,
            interval: 10000,
          }}
        >
          {promptsData.map((promptObj, i) => {
            return (
              <Slide
                className="center"
                image={
                  <img
                    alt="Background"
                    src="../../images/typewriter-801921_1920.jpg"
                  />
                }
                key={promptObj.id}
              >
                <Caption className="caption-backdrop">
                  <h4>
                    <strong>
                      <Link to={`/prompts/${promptObj.id}`} key={i}>
                        {promptObj.prompt}
                      </Link>
                    </strong>
                  </h4>
                </Caption>
              </Slide>
            )
          })}
        </Slider>
      </Col>
    </Row>
  )
}
export default Prompts

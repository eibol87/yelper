import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import SearchForm from './SearchForm'
import Footer from './Footer'

import '../css/Home.css'

const Home = () => (
  <div className="background-image">
    <Grid>
      <Row>
        <Col lgOffset={2} lg={8}>
          <div className="title">
            <h1>Yelper</h1>
            <h4 className="subtitle">BARCELONA</h4>
          </div>
          <SearchForm style={'SearchForm-home'} />
        </Col>
      </Row>
    </Grid>
    <Footer style={'position-nav-selector-absolute'} />
  </div>
)

export default Home

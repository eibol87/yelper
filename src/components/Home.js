import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import SearchForm from './SearchForm'
import Footer from './Footer'

import './Home.css'

const Home = () => (
  <div className="background-image">
    <Grid>
      <Row>
        <Col lgOffset={2} lg={8}>
          <div>
            <h1>Yelper</h1>
            <h4>BARCELONA</h4>
            <SearchForm />
          </div>
        </Col>
      </Row>     
    </Grid>
    <Footer />
  </div>
)

export default Home

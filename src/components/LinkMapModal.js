import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

import ShowMaps from './Map'

import '../css/LinkMapModal.css'

class LinkMapModal extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }
  getInitialState () {
    return {
      showModal: false
    }
  }
  close () {
    this.setState({
      showModal: false
    })
  }
  open () {
    this.setState({
      showModal: true
    })
  }
  render () {
    return (
      <div>
        <li className="glyphicon"><span className="glyphicon-force-font glyphicon-map-marker">&nbsp;</span>
          <a className="cursos-pointer" onClick={this.open}>{this.props.address} - ({this.props.city})</a>
        </li>
        <Modal show={this.state.showModal} onHide={this.close} bsSize={this.large}>
          <Modal.Header closeButton>
            <Modal.Title>Google Maps</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ShowMaps
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              lat={this.props.latitude}
              lng={this.props.longitude}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default LinkMapModal

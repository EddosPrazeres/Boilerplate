import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'
import './BlankComponent.scss'

class BlankComponent extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <Container>
        <div className="BlankComponent">BlankComponent</div>
      </Container>
    )
  }
}

BlankComponent.defaultProps = {

}

BlankComponent.propTypes = {

}

export default BlankComponent
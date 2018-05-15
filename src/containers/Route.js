import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return (
    React.createElement(component, finalProps)
  )
}

class PropsRouter extends React.Component {
  render () {
    const {component, ...rest} = this.props
    return ReactDOM.createPortal((
      <Route {...rest} render={routeProps => {
        return renderMergedProps(component, routeProps, rest)
      }}/>
    ), document.querySelector('#sheet'))
  }
}

PropsRouter.propTypes = {
  component: PropTypes.node.isRequired,
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default withRouter(connect()((PropsRouter)))
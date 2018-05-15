import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui'
import ReactDOM from 'react-dom'

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return (
    React.createElement(component, finalProps)
  )
}
let id = 0
class PropsRouter extends React.Component {
  render () {
    const {component, location, classes, ...rest} = this.props
    return ReactDOM.createPortal((
        <Route {...rest} render={routeProps => {
          return renderMergedProps(component, routeProps, rest)
        }}/>
    ), document.querySelector('#sheet'))
  }
}

export default withRouter(connect()((PropsRouter)))
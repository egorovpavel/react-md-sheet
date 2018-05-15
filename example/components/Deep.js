import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class NewUserView extends React.Component {
  render () {
    return (
      <div>
        Deep
      </div>
    )
  }
}

export default withRouter(connect()(NewUserView))
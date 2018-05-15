import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class NewUserView extends React.Component {
  render () {
    return (
      <div>
        <Link to={`/users/1/sub`}>Sub</Link>
      </div>
    )
  }
}

export default withRouter(connect()(NewUserView))
import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class NewUserView extends React.Component {
  render () {
    return (
      <div>
        <Link to={`/users/1/sub/sub/deep`}>Deep</Link>
      </div>
    )
  }
}

export default withRouter(connect()(NewUserView))
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class NewUserView extends React.Component {
  render () {
    return (
      <div>
        <Button component={Link} to={`/users/1/sub`} variant="raised" color="default">Sub</Button>
      </div>
    )
  }
}

export default withRouter(connect()(NewUserView))
import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { ActionHeader, sheetWithHeader } from 'react-md-sheet'

class NewUserView extends React.Component {
  render () {
    return (
      <div>
        <Button component={Link} to={`/users/1/sub/sub/deep`} variant="raised" color="default">Deep</Button>
      </div>
    )
  }
}

export default withRouter(connect()(sheetWithHeader(NewUserView,ActionHeader)))
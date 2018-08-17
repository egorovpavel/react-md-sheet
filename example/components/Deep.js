import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { ActionHeader, sheetWithHeader } from 'react-md-sheet'

class NewUserView extends React.Component {
  render () {
    return (
      <div>
        Deep
      </div>
    )
  }
}

export default withRouter(connect()(sheetWithHeader(NewUserView,ActionHeader)))
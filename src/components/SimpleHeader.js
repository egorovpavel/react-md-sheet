import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { leavingSheet } from '../actions/actions'

function SimpleHeader (props) {

  return (
    <div>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <IconButton onClick={() => props.goBack(props)} color="inherit" aria-label="Close">
            <CloseIcon/>
          </IconButton>
          <Typography variant="title" color="inherit">{props.title}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapDispachToProps = (dispatch) => {
  return {
    goBack: (props) => {
      dispatch(leavingSheet({
        id: props.id,
        back: props.history.goBack
      }))
    }
  }
}

export default withRouter(connect(null, mapDispachToProps)((SimpleHeader)))
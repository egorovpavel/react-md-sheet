import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { leavingSheet } from '../actions/actions'
import PropTypes from 'prop-types'

function SimpleHeader (props) {

  return (
    <div>
      <AppBar position="static" color={props.color || 'default'} elevation={1}>
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

SimpleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default withRouter(connect(null, mapDispachToProps)((SimpleHeader)))
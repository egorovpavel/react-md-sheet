import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { leavingSheet } from '../actions/actions'
import PropTypes from 'prop-types'
import withStyles  from '@material-ui/core/styles/withStyles'

const styles = {
  root: {},
  flex: {
    flex: 1,
  },
  content: {},
  wrapper: {},
};

function ActionHeader (props) {
  const {classes} = props
  return (
    <div>
      <AppBar position="static" color={props.color || 'default'} elevation={1}>
        <Toolbar>
          <IconButton onClick={() => props.goBack(props)} color="inherit" aria-label="Close">
            <CloseIcon/>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>{props.title}</Typography>
          <Button variant="raised" color="primary">Action</Button>
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

ActionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default withRouter(connect(null, mapDispachToProps)((withStyles(styles)(ActionHeader))))
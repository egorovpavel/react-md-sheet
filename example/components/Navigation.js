import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import IconButton from 'material-ui/IconButton'
import Logo from '@material-ui/icons/Beenhere'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const styles = {
  root: {
    flexGrow: 1,
  },
}

function Navigation (props) {
  const {classes} = props
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <Logo/>
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Demo
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRouter(connect()(withStyles(styles)(Navigation)))

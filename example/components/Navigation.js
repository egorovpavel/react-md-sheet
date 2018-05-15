import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
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
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Logo/>
          </IconButton>
          <Typography variant="title" color="inherit">
            Demo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRouter(connect()(withStyles(styles)(Navigation)))

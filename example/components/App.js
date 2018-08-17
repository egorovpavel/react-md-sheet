import { hot } from 'react-hot-loader'
import React from 'react'
import Navigation from './Navigation'
import List from './List'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ActionHeader, Builder, Route, SimpleHeader } from 'react-md-sheet'
import NewUserView from './User/Details'
import SubView from './Sub'
import SubSubView from './SubSub'
import DeepView from './Deep'


function App () {

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Navigation/>
        </Grid>
        <Grid item xs={12}>
          <List/>
        </Grid>
      </Grid>

      <Route path={`/users/*`} component={NewUserView}/>
      <Route path={`/users/:id/sub`} component={SubView}/>
      <Route path={`/users/:id/sub/sub`} component={SubSubView}/>
      <Route path={`/users/:id/sub/sub/deep`} component={DeepView}/>

    </div>
  )
}

export default withRouter(connect()(hot(module)(App)))

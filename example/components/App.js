import { hot } from 'react-hot-loader'
import React from 'react'
import Navigation from './Navigation'
import List from './List'
import Grid from 'material-ui/Grid'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Builder, Route, SimpleHeader } from 'react-md-sheet'
import NewUserView from './Details'
import SubView from './Sub'
import SubSubView from './SubSub'
import DeepView from './Deep'

const NewUserSheet = (new Builder).header(SimpleHeader).body(NewUserView).build()
const SubSheet = (new Builder).header(SimpleHeader).body(SubView).build()
const SubSubSheet = (new Builder).header(SimpleHeader).body(SubSubView).build()
const DeepSheet = (new Builder).header(SimpleHeader).body(DeepView).build()

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

      <Route path={`/users/*`} component={NewUserSheet} title='New User' size={40}/>
      <Route path={`/users/:id/sub`} component={SubSheet} title='Sub' size={60}/>
      <Route path={`/users/:id/sub/sub`} component={SubSubSheet} title='Sub Sub' size={70}/>
      <Route path={`/users/:id/sub/sub/deep`} component={DeepSheet} title='Deep sheet' size={40}/>

    </div>
  )
}

export default withRouter(connect()(hot(module)(App)))

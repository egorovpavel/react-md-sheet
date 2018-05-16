import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { FormControl, Input, InputLabel } from '@material-ui/core/es/index'

class NewUserView extends React.Component {
  state = {
    name: 'Cat in the Hat',
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <FormControl fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              value={this.state.name}
              onChange={this.handleChange('name')}
            />
          </FormControl>
          <div>
            <Button component={Link} to={`/users/1/sub`} variant="raised" color="default">Sub</Button>
          </div>
        </div>
      </form>
    )
  }
}

export default withRouter(connect()(NewUserView))
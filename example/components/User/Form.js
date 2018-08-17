import React from 'react'
import { Link } from 'react-router-dom'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core/es/index'
import save from './Save'
import {Field, reduxForm } from 'redux-form'

class UserForm extends React.Component {

  render () {
    const {error, handleSubmit} = this.props
    return (
      <form>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="name">Name</InputLabel>
          <Field
            component={Input}
            id="name"
            name="name"
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="name">Email</InputLabel>
          <Field
            component={Input}
            id="name"
            name="email"
          />
        </FormControl>
        <div>
          <Button component={Link} to={`/users/1/sub`} variant="raised" color="default">Parents</Button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'saveUser',
  onSubmit: save
})(UserForm)
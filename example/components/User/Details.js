import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ActionHeader, sheetWithHeader } from 'react-md-sheet'
import UserForm from './Form'

export default withRouter(connect()(sheetWithHeader(UserForm, ActionHeader,{
  title : 'User',
  action_name : 'Save',
  action_intent : 'primary',
  color : 'default',
  size : 40,
  action_handler : () => console.log('HANDLE')
})))
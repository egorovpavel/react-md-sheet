import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import IconButton from 'material-ui/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import { CircularProgress } from 'material-ui/Progress'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
})

class Content extends Component {

  constructor (props) {
    super(props)
    this.data = {
      items: [
        {
          id: 1,
          name: 'Pavel Egorov',
          email: 'mailtrap@mailinator.com'
        }
      ]
    }
    this.state = {
      dataLoaded: false
    }
  }

  async componentDidMount () {
    this.setState({
      dataLoaded: true
    })
  }

  render () {

    return !this.state.dataLoaded ? (<CircularProgress/>) : (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell/>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.data.items.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>{n.name}</TableCell>
                  <TableCell>{n.email}</TableCell>
                  <TableCell>
                    <Link to={`/users/${n.id}`}>
                      <IconButton>
                        <EditIcon/>
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default withRouter(connect()(withStyles(styles)(Content)))

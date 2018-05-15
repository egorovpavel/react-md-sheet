import * as React from 'react'
import withStyles  from '@material-ui/core/styles/withStyles'
import Backdrop from '@material-ui/core/Backdrop'
import Paper from 'material-ui/Paper'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { enteredSheet, enteringSheet, leavedSheet, leavingSheet } from '../actions/actions'
import styles from './Builder.style'
import { SHEET_ANIMATION } from '../constants/constants'
import withTimeout from 'react-timeout'
import PropTypes from 'prop-types';

let sheetId = 0 // TODO: move to store maybe

export default class SheetBuilder {
  constructor () {
    this.size = 70
    this.id = sheetId++
  }

  header (TitleComponent) {
    this.header = TitleComponent
    return this
  }

  body (BodyComponent) {
    this.body = BodyComponent
    return this
  }

  build () {
    const HeaderComponent = this.header
    const BodyComponent = this.body
    const id = `sheet_${this.id}`

    class SheetWrapper extends React.Component {
      constructor (props) {
        super()
        this.props = props
        this.dispatch = props.dispatch
        this.state = {
          setup: true
        }
      }

      componentWillMount () {
        this.dispatch(enteringSheet({
          id,
          size: this.props.size,
          offset: 0,
          enter: true
        }))

      }

      componentDidMount () {
        this.props.setTimeout(() => {
          this.setState({
            setup: false
          })
        }, 1)
      }

      componentWillReceiveProps (next) {
        if (next.state.exit && !this.props.state.exit) {
          this.props.setTimeout(() => {
            this.dispatch(leavedSheet({id}))
            this.props.history.goBack()
          }, SHEET_ANIMATION)
        }

        if (next.state.enter && !this.props.state.enter) {
          this.props.setTimeout(() => {
            this.dispatch(enteredSheet({id}))
          }, SHEET_ANIMATION)
        }
      }

      render () {
        const {classes, location} = this.props
        return (

          <div key={id} className={classes.root}>
            <Backdrop onClick={() => this.props.goBack(id, this.props)} open={!this.props.state.exit}/>
            <Paper square="true" elevation={4}
                   className={classNames(
                     classes.wrapper,
                     `size-${this.props.state.size}`,
                     this.state.setup ? 'sheet-setup' : '',
                     this.props.state.exit ? 'sheet-exiting' : '',
                     this.props.state.enter ? 'sheet-entering' : 'sheet-entered',
                     `sheet-offset-${this.props.state.offset}`
                   )}>
              <HeaderComponent id={id} {...this.props}/>
              <div className={classes.content}>
                <BodyComponent id={id} {...this.props}/>
              </div>
            </Paper>
          </div>
        )
      }
    }

    const mapStateToProps = (state, own) => ({
      state: state.reducersSheet[id] || {
        id,
        size: own.size,
        offset: 0
      }
    })

    const mapDispachToProps = (dispatch) => {
      return {
        goBack: (id, props) => {
          dispatch(leavingSheet({
            id: id,
            back: props.history.goBack
          }))
        }
      }
    }

    SheetWrapper.propTypes = {
      size : PropTypes.number.isRequired
    }

    return withRouter(connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(withTimeout(SheetWrapper))))
  }
}
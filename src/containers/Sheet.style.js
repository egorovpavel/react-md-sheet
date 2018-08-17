import { SHEET_ANIMATION } from '../constants/constants'

export default {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  flex : {

  },
  content: {
    backgroundColor: 'rgb(250,250,250)',
    padding: '1em',
    height: '100%',
    zIndex: -1,
  },
  wrapper: {
    transform: 'translateX(100%)',
    transition: `all ${SHEET_ANIMATION}ms`,
    '&.sheet-entering': {
      transform: 'translateX(0%)'
    },
    '&.sheet-entered' : {
      transform: 'translateX(0%)'
    },
    '&.sheet-exiting': {
      transform: 'translateX(100%)'
    },
    '&.sheet-setup': {
      transform: 'translateX(100%)'
    },
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    '@media (max-width: 599px)': {
      '&.size-40, &.size-50, &.size-60, &.size-70, &.size-80, &.size-90, &.size-100': {
        width: '100%'
      },
      '&.sheet-offset-10, &.sheet-offset-20, &.sheet-offset-30, &.sheet-offset-40, &.sheet-offset-50, &.sheet-offset-60, &.sheet-offset-700': {
        right: 0
      }
    },
    '@media (min-width: 599px)': {
      '&.size-40': {
        width: '40%'
      },
      '&.size-50': {
        width: '50%'
      },
      '&.size-60': {
        width: '60%'
      },
      '&.size-70': {
        width: '70%'
      },
      '&.size-80': {
        width: '80%'
      },
      '&.size-90': {
        width: '90%'
      },
      '&.size-100': {
        width: '100%'
      },
      '&.sheet-offset-10': {
        right: '10%'
      },
      '&.sheet-offset-20': {
        right: '20%'
      },
      '&.sheet-offset-30': {
        right: '30%'
      },
      '&.sheet-offset-40': {
        right: '40%'
      },
      '&.sheet-offset-50': {
        right: '50%'
      },
      '&.sheet-offset-60': {
        right: '60%'
      },
      '&.sheet-offset-70': {
        right: '70%'
      }
    }
  }
}

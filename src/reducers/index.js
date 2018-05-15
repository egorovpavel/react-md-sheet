import { SHEET_ENTERED, SHEET_ENTERING, SHEET_LEAVED, SHEET_LEAVING } from '../constants/constants'

const sheets = (state = {}, action) => {
  switch (action.type) {
    case SHEET_ENTERING : {
      const newState = {
        ...state
      }
      newState[action.sheet.id] = {...action.sheet, enter: true}

      if (Object.values(newState).length > 1) {
        for (let idx = Object.values(newState).length - 2; idx >= 0; --idx) {
          const current = Object.values(newState)[idx]
          const prev = Object.values(newState)[idx + 1]

          newState[current.id] = {
            id: current.id,
            size: current.size,
            offset: current.size - prev.size < 0
              ? Math.abs(current.size - prev.size) + prev.offset + 10
              : prev.offset + 10
          }
        }
      }
      return newState
    }
    case SHEET_ENTERED : {
      const newState = {
        ...state
      }
      delete newState[action.sheet.id].enter
      newState[action.sheet.id] = {...newState[action.sheet.id]}

      return newState
    }
    case SHEET_LEAVING : {

      const newState = {
        ...state
      }

      delete newState[action.sheet.id]
      if (Object.values(newState).length >= 1) {
        for (let idx = Object.values(newState).length - 1; idx >= 0; --idx) {
          const current = Object.values(newState)[idx]
          const prev = Object.values(newState)[idx + 1]
          newState[current.id] = {
            id: current.id,
            size: current.size,
            offset: !prev
              ? 0
              : Math.abs(current.size - prev.size) + prev.offset + 10
          }
        }
      }
      newState[action.sheet.id] = {...newState[action.sheet.id], exit: true}
      return newState
    }
    case SHEET_LEAVED : {
      const newState = {
        ...state
      }
      delete newState[action.sheet.id]

      return newState
    }
    default:
      return state
  }
}

export default sheets
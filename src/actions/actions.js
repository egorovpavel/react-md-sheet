import { SHEET_ENTERED, SHEET_ENTERING, SHEET_LEAVED, SHEET_LEAVING } from '../constants/constants'

export const enteringSheet = sheet => ({
  type: SHEET_ENTERING,
  sheet
})

export const enteredSheet = sheet => ({
  type: SHEET_ENTERED,
  sheet
})

export const leavingSheet = sheet => ({
  type: SHEET_LEAVING,
  sheet
})

export const leavedSheet = sheet => ({
  type: SHEET_LEAVED,
  sheet
})

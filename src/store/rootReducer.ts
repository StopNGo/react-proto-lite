import { combineReducers, UnknownAction } from '@reduxjs/toolkit'

import { themeReducer } from './theme/themeSlice'
import { i18nReducer } from 'i18n/i18nSlice'

export const rootReducer = {
  theme: themeReducer,
  i18n: i18nReducer
}

export const appReducer = combineReducers(rootReducer)

export const mainReducer: any = (
  state: ReturnType<typeof appReducer>,
  action: UnknownAction
) => appReducer(state, action)

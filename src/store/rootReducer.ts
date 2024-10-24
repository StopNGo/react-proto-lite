import {
  type Reducer,
  type UnknownAction,
  combineReducers,
} from '@reduxjs/toolkit'

import { i18nReducer } from 'i18n/i18nSlice'
import { themeReducer } from './theme/themeSlice'

export const rootReducer = {
  theme: themeReducer,
  i18n: i18nReducer,
}

export const appReducer = combineReducers(rootReducer)

export const mainReducer: Reducer = (
  state: ReturnType<typeof appReducer>,
  action: UnknownAction,
) => appReducer(state, action)

import {
  type Action,
  type Dispatch,
  type EnhancedStore,
  type StateFromReducersMapObject,
  type ThunkDispatch,
  type UnknownAction,
  configureStore,
} from '@reduxjs/toolkit'

import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'

import type { ThunkAction } from 'redux-thunk'

import { mainReducer, type rootReducer } from './rootReducer'

const initStore = (preloadedState?: Partial<RootState>): EnhancedStore =>
  configureStore({
    reducer: mainReducer,
    preloadedState,
    devTools: String(process.env.NODE_ENV).trim() !== 'production',
  })

export type Store = ReturnType<typeof initStore>
export type RootState = StateFromReducersMapObject<typeof rootReducer>
export type AppDispatch = Store['dispatch']
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export const useAppDispatch = (): Dispatch<UnknownAction> &
  ThunkDispatch<RootState, undefined, UnknownAction> =>
  useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { initStore }

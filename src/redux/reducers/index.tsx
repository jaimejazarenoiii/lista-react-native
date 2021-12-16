import { combineReducers } from 'redux'
import { shopReducer } from './shop.reducer'

export const rootReducer = combineReducers({
  shops: shopReducer
})

export type RootState = ReturnType<typeof rootReducer>

//@ts-check
import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import commonReducer from './common.reducer'
import contactsReducer from './contacts.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  common: commonReducer,
  contacts: contactsReducer,
})

export default rootReducer
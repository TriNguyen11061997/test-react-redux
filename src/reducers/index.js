import { combineReducers } from 'redux'
import breed from './breeds'
import image from './images'
const rootReducer = combineReducers({
  breed,
  image
})

export default rootReducer
import { ADD_LIST, DELETE_LIST, EDIT_LIST } from '../actions'
import '../StarWars'

const lists = (state = [], action) => {
    switch (action.type) {
      case ADD_LIST:
        return [
          ...state, 
          {
            characterList
          }
        ]
        
      case DELETE_LIST:
        const { index } = action.payload
        return [...state.slice(0, index), ...state.slice(index + 1)]
      
      case EDIT_LIST:
        return state.map((item, index) => {
          if (index !== action.payload.index) {
            return item
          }
          return { ...item, ...action.payload }
        })

      default:
        return state
      
    }
  }
  export default lists
  
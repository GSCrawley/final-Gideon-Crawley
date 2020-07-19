export const ADD_LIST = "ADD_LIST"
export const EDIT_LIST = "EDIT_LIST"
export const DELETE_LIST = "DELETE_LIST"
export const TOGGLE_LIST = "TOGGLE_LIST"

let nextListId = 0
export const addList = text => ({
  type: ADD_LIST,
  id: nextListId++,
  text
})

export const deleteList = (index) => {
  return {
    type: DELETE_LIST,
    payload: { index }
  }
}

export const editList = (index, name) => {
  return {
    type: EDIT_LIST,
    payload: { index, name }
  }
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleList = id => ({
  type: 'TOGGLE_LIST',
  id 
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
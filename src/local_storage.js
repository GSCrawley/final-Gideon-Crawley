const LIST_STATE = "LIST_STATE"

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(LIST_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(LIST_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data:"+err)
  }
}
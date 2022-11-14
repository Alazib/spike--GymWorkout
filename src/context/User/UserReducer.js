function UserReducer(state, action) {
  switch (action.type) {
    case "ADD_NAME":
      return { ...state, name: action.payload }
    case "ADD_EXERCISE":
      return { ...state, exercise: action.payload }
    case "ADD_KILOS":
      return { ...state, kilos: action.payload }
    default:
      return state
  }
}

export default UserReducer

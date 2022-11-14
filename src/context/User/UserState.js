import { useReducer } from "react"
import UserReducer from "./UserReducer"
import UserContext from "./UserContext"

function UserState({ children }) {
  const initialState = {}

  const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserState }

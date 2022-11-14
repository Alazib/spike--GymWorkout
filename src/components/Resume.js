import { useContext } from "react"
import { useNavigate } from "react-router"
import UserContext from "../context/User/UserContext"
import Button from "./Button/Button"

function Resume() {
  const navigate = useNavigate()

  const user = useContext(UserContext)

  function backToStep3() {
    navigate("/step3")
  }

  return (
    <div className="resume">
      <h1>Resume</h1>
      <ul>
        <li>NAME: {user.state.name}</li>
        <li>EXERCISE: </li>
        <li>Kilos: Kg</li>
      </ul>

      <Button
        label="Back"
        onClick={() => {
          backToStep3()
        }}
      />
    </div>
  )
}

export default Resume

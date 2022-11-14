import { useContext } from "react"
import { useNavigate } from "react-router"
import UserContext from "../context/User/UserContext"
import Button from "./Button/Button"

function Resume() {
  const navigate = useNavigate()

  const user = useContext(UserContext)

  const { name, exercise, kilos } = user.state

  function backToStep3() {
    navigate("/step3")
  }

  return (
    <div className="resume">
      <h1>Resume</h1>
      <ul>
        <li>NAME: {name}</li>
        <li>EXERCISE: {exercise} </li>
        <li>Kilos: {kilos}Kg</li>
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

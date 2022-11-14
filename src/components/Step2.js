import Button from "./Button/Button"
import { useNavigate } from "react-router"
import { useContext } from "react"
import UserContext from "../context/User/UserContext"

function Step2() {
  const navigate = useNavigate()
  const { dispatch } = useContext(UserContext)

  function backToStep1() {
    navigate("/")
  }

  function goToStep3() {
    navigate("/step3")
  }

  function handleInputChange(e) {
    dispatch({
      type: "ADD_EXERCISE",
      payload: e.target.value,
    })
  }

  return (
    <div className="step 2">
      <Button
        label="Back"
        onClick={() => {
          backToStep1()
        }}
      />

      <form>
        <label>Exercise</label>
        <input name="exercise" onChange={handleInputChange}></input>
      </form>

      <Button
        label="Next"
        onClick={() => {
          goToStep3()
        }}
      />
    </div>
  )
}

export default Step2

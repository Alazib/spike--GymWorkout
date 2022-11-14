import Button from "./Button/Button"
import { useNavigate } from "react-router"
import UserContext from "../context/User/UserContext"
import { useContext } from "react"

function Step1() {
  const navigate = useNavigate()

  const { dispatch } = useContext(UserContext)

  function goToStep2() {
    navigate("/step2")
  }

  function handleInputChange(e) {
    dispatch({
      type: "ADD_NAME",
      payload: e.target.value,
    })
  }

  return (
    <div className="step 1">
      <form>
        <label>Name</label>
        <input name="name" onChange={handleInputChange}></input>
      </form>

      <Button
        label="Next"
        onClick={() => {
          goToStep2()
        }}
      />
    </div>
  )
}

export default Step1

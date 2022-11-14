import Button from "./Button/Button"
import { useNavigate } from "react-router"

function Step2() {
  const navigate = useNavigate()

  function backToStep1() {
    navigate("/")
  }

  function goToStep3() {
    navigate("/step3")
  }

  function handleInputChange(e) {}

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

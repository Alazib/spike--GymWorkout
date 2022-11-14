import Button from "./Button/Button"
import { useNavigate } from "react-router"

function Step3() {
  const navigate = useNavigate()

  function backToStep2() {
    navigate("/step2")
  }

  function goToResume() {
    navigate("/resume")
  }

  function handleInputChange(e) {}

  return (
    <div className="step 3">
      <Button
        label="Back"
        onClick={() => {
          backToStep2()
        }}
      />

      <form>
        <label>Kilos</label>
        <input name="kilos" onChange={handleInputChange}></input>
      </form>

      <Button
        label="Next"
        onClick={() => {
          goToResume()
        }}
      />
    </div>
  )
}

export default Step3

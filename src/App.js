import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import Step3 from "./components/Step3"
import Resume from "./components/Resume"
import { Routes } from "react-router"
import { Route } from "react-router"
import { UserState } from "./context/User/UserState"

function App() {
  return (
    <div className="app">
      <UserState>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </UserState>
    </div>
  )
}

export default App

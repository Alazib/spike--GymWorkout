import "../styles/Stepper.css"

function Stepper() {
  return (
    <>
      <ol class="c-stepper">
        <li class="c-stepper__item">
          <h3 class="c-stepper__title">Step 1</h3>
          <p class="c-stepper__desc">NAME</p>
        </li>
        <li class="c-stepper__item">
          <h3 class="c-stepper__title">Step 2</h3>
          <p class="c-stepper__desc">EXERCISE</p>
        </li>
        <li class="c-stepper__item">
          <h3 class="c-stepper__title">Step 3</h3>
          <p class="c-stepper__desc">KILOS</p>
        </li>
      </ol>
    </>
  )
}

export default Stepper

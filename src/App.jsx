import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './kerdoiv.css'
import KerdoivForm from './KerdoivForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Nenczethi konzultáció</h1>
      <div className="card">
        <KerdoivForm />
      </div>
    </>
  )
}

export default App

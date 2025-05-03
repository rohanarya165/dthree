import { useState } from 'react'
import D3CircleExample from "./D3CircleExample"
import './App.css'
import BarChart from './BarChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<D3CircleExample/>
<BarChart/>
    </>
  )
}

export default App

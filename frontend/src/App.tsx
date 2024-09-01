import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Room } from './components/Room'
import { Landing } from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/room' element={<Room/>} />
        <Route path='/' element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

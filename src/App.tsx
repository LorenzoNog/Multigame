import {Routes, Route} from 'react-router-dom'
import Memotest from './Memotest'
import WordsPerMinute from './WordsPerMinute'
import Pokemon from './Pokemon'
import Inicio from './Inicio'
import '../src/css/input.css'

function App() {
  return(
    <Routes>
      <Route element={<Inicio/>} path='/'/>
      <Route element={<Memotest/>} path='/memotest'/>
      <Route element={<WordsPerMinute/>} path='/wpm'/>
      <Route element={<Pokemon/>} path='/pokemon'/>
    </Routes>
  )
}

export default App

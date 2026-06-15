import { useState } from 'react'
import Header from './components/Header'
import { RubiksCube as RubiksCubeModel } from './scripts/rubiks-cube-model'
import RubiksCube from './components/RubiksCube'
import './styles/App.css'

function App() {
  const [rubiksCube, setRubiksCube] = useState(() => new RubiksCubeModel())

  return (
    <>
      <Header />
      <RubiksCube rubiksCube={rubiksCube} />
    </>
  )
}

export default App
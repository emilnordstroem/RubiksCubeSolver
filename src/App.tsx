import { useState } from 'react'
import Header from './components/Header'
import { RubiksCube as RubiksCubeModel } from './scripts/rubiks-cube-model'
import RubiksCube from './components/RubiksCube'
import SolutionInstructions from './components/SolutionInstructions'
import SolveRubiksCube from './components/SolveRubiksCube'
import './styles/App.css'

function App() {
  const [rubiksCube, setRubiksCube] = useState(() => new RubiksCubeModel())
  const [instructions, setInstructions] = useState<string[]>([])

  const handleSolvingRubikscube = () => {
    const steps: string[] = [] // service method solve should be called
    setInstructions(steps)
  }

  return (
    <>
      <Header />
      <RubiksCube rubiksCube={rubiksCube} />
      <SolveRubiksCube onSolve={handleSolvingRubikscube} />
      <SolutionInstructions instructions={instructions} />
    </>
  )
}

export default App
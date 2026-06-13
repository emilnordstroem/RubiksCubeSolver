import Header from './components/Header'
import { RubiksCube as RubiksCubeModel } from './scripts/rubiks-cube-model'
import RubiksCube from './components/RubiksCube/RubiksCube'
import './styles/App.css'

let rubiksCube = new RubiksCubeModel()

function App() {
    return (
      <>
        <Header />
        <RubiksCube rubiksCube={rubiksCube} />
      </>
    )
}

export default App

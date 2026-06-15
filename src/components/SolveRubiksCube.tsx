type Props = {
  onSolve: () => void
}

function SolveRubiksCube ({ onSolve }: Props) {
    return (
        <button onClick={onSolve}>
            Solve
        </button>
    )
}

export default SolveRubiksCube
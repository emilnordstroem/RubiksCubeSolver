
function SolutionInstructions ({ instructions }: { instructions: string[] }) {
    return (
        <ol>
            {instructions.map((instruction: string, index: number) => (
                <li key={index}>
                    {instruction}
                </li>
            ))}
        </ol>
    )
}

export default SolutionInstructions
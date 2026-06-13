import { RubiksCube as RubiksCubeModel } from "../scripts/rubiks-cube-model"

function Face ({ face }: { face: string[][] }) {
    return (
        <td>
            <table>
                <tbody>
                    {face.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((color, columnIndex) => (
                                <td
                                    key={columnIndex}
                                    style={{
                                        backgroundColor: color,
                                        width: '40px',
                                        height: '40px',
                                        border: '2px solid #333',
                                    }}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </td>
    )
}

function RubiksCube () {
    const rubiksCube: RubiksCubeModel = new RubiksCubeModel()

    return (
        <table>
            <tbody>
                <tr>
                    <Face face={null} />
                    <Face face={rubiksCube.Up} />
                    <Face face={null} />
                    <Face face={null} />
                </tr>
                <tr>
                    <Face face={rubiksCube.Left} />
                    <Face face={rubiksCube.Front} />
                    <Face face={rubiksCube.Right} />
                    <Face face={rubiksCube.Back} />
                </tr>
                <tr>
                    <Face face={null} />
                    <Face face={rubiksCube.Down} />
                    <Face face={null} />
                    <Face face={null} />
                </tr>
            </tbody>
        </table>
    )
}

export default RubiksCube

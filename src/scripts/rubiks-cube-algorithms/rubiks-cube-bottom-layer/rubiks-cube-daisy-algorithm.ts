import type { RubiksCube } from "../../rubiks-cube-model"
import { bringWhiteToUpEdge_Bottom, bringWhiteToUpEdge_Left, bringWhiteToUpEdge_Right, bringWhiteToUpEdge_Top } from "../../rubiks-cube-algoritmic-helpers/daisy-helpers"
import { hasColor, isCenter, isEdge } from "../../rubiks-cube-algoritmic-helpers/face-helpers"

export function daisyAlgorithm(rubikscube: RubiksCube): RubiksCube {
    if (isDaisyComplete(rubikscube.Up)) {
        return rubikscube
    }

    const limit = 100
    let iterations = 0
 
    while (!isDaisyComplete(rubikscube.Up) && iterations < limit) {
        iterations++
 
        if (!hasColor(rubikscube.Up[0][1], edge)) {
            rubikscube = bringWhiteToUpEdge_Top(rubikscube)
        } else if (!hasColor(rubikscube.Up[1][2], edge)) {
            rubikscube = bringWhiteToUpEdge_Right(rubikscube)
        } else if (!hasColor(rubikscube.Up[2][1], edge)) {
            rubikscube = bringWhiteToUpEdge_Bottom(rubikscube)
        } else if (!hasColor(rubikscube.Up[1][0], edge)) {
            rubikscube = bringWhiteToUpEdge_Left(rubikscube)
        }
    }
 
    return rubikscube
}

const center: string = 'yellow'
const edge: string = 'white'
 
export function isDaisyComplete(face: string[][]): boolean {
    for (let row = 0; row < face.length; row++) {
        for (let column = 0; column < face[row].length; column++) {
            const squareColor: string = face[row][column]
            if (isEdge(row, column) && !hasColor(squareColor, edge)) {
                return false
            } else if (isCenter(row, column) && !hasColor(squareColor, center)) {
                return false
            }
        }
    }
    return true
}
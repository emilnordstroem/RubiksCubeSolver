import type { RubiksCube } from "./rubiks-cube-model";

// support functions for clock/counter clockwise rotation
function rotateFaceClockwise(face: string[][]): string[][] {
    return [
        [face[2][0], face[1][0], face[0][0]],
        [face[2][1], face[1][1], face[0][1]],
        [face[2][2], face[1][2], face[0][2]]
    ]
}

function rotateFaceCounterClockwise(face: string[][]): string[][] {
    return [
        [face[0][2], face[1][2], face[2][2]],
        [face[0][1], face[1][1], face[2][1]],
        [face[0][0], face[1][0], face[2][0]]
    ]
}

// rotation algorithms
function upFaceRotationLeft (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Up = rotateFaceClockwise(rubikscube.Up)
        const tempRow = [...rubikscube.Front[0]]

        rubikscube.Front[0] = [...rubikscube.Right[0]]
        rubikscube.Right[0] = [...rubikscube.Back[0]]
        rubikscube.Back[0]  = [...rubikscube.Left[0]]
        rubikscube.Left[0]  = tempRow
    }
    return rubikscube
}


function upFaceRotationRight (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Up = rotateFaceClockwise(rubikscube.Up)
        const tempRow = [...rubikscube.Front[0]]

        rubikscube.Front[0] = [...rubikscube.Left[0]]
        rubikscube.Right[0] = [...rubikscube.Front[0]]
        rubikscube.Back[0]  = [...rubikscube.Right[0]]
        rubikscube.Right[0]  = tempRow
    }
    return rubikscube
}

/*
function frontFaceRotationLeft (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function frontFaceRotationRight (rubikscube: RubiksCube, movements: number): RubiksCube {

}
*/

function downFaceRotationLeft (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Down = rotateFaceClockwise(rubikscube.Down)
        const tempRow = [...rubikscube.Front[2]]

        rubikscube.Front[2] = [...rubikscube.Right[2]]
        rubikscube.Right[2] = [...rubikscube.Back[2]]
        rubikscube.Back[2]  = [...rubikscube.Left[2]]
        rubikscube.Left[2]  = tempRow
    }
    return rubikscube
}

function downFaceRotationRight (rubikscube: RubiksCube, movements: number): RubiksCube {
    for (let movement = 1; movement <= movements; movement++) {
        rubikscube.Up = rotateFaceClockwise(rubikscube.Up)
        const tempRow = [...rubikscube.Front[2]]

        rubikscube.Front[2] = [...rubikscube.Left[2]]
        rubikscube.Right[2] = [...rubikscube.Front[2]]
        rubikscube.Back[2]  = [...rubikscube.Right[2]]
        rubikscube.Right[2]  = tempRow
    }
    return rubikscube
}

/*
function backFaceRotationLeft (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function backFaceRotationRight (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function leftFaceRotationUp (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function leftFaceRotationDown (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function rightFaceRotationUp (rubikscube: RubiksCube, movements: number): RubiksCube {

}

function rightFaceRotationDown (rubikscube: RubiksCube, movements: number): RubiksCube {

}
*/
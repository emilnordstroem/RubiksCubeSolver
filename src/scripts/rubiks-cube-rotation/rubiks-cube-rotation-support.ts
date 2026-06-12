export function rotateFaceClockwise(face: string[][]): string[][] {
    return [
        [face[2][0], face[1][0], face[0][0]],
        [face[2][1], face[1][1], face[0][1]],
        [face[2][2], face[1][2], face[0][2]]
    ]
}

export function rotateFaceCounterClockwise(face: string[][]): string[][] {
    return [
        [face[0][2], face[1][2], face[2][2]],
        [face[0][1], face[1][1], face[2][1]],
        [face[0][0], face[1][0], face[2][0]]
    ]
}

export function getColumn(face: string[][], col: number): string[] {
    return [face[0][col], face[1][col], face[2][col]];
}
 
export function setColumn(face: string[][], col: number, values: string[]): void {
    face[0][col] = values[0];
    face[1][col] = values[1];
    face[2][col] = values[2];
}

function face (color: string) {
    return [
        [color, color, color],
        [color, color, color],
        [color, color, color],
    ]
}

export class RubiksCube {
    Up = face('white')
    Front = face('blue')
    Down = face('yellow')
    Back = face('green')
    Left = face('red')
    Right = face('orange')
}
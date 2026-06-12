function face (color: string) {
    return [
        [color, color, color],
        [color, color, color],
        [color, color, color],
    ]
}

export class RubiksCube {
    Up = face('yellow')
    Front = face('blue')
    Down = face('white')
    Back = face('green')
    Left = face('orange')
    Right = face('red')
}
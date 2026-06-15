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

    clone(): RubiksCube {
        const next = new RubiksCube()
        next.Up    = this.Up.map(row => [...row])
        next.Down  = this.Down.map(row => [...row])
        next.Front = this.Front.map(row => [...row])
        next.Back  = this.Back.map(row => [...row])
        next.Left  = this.Left.map(row => [...row])
        next.Right = this.Right.map(row => [...row])
        return next
    }
}
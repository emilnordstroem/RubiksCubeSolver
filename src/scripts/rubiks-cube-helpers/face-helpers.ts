export function hasColor(colorOfSquare: string, colorToMatch: string): boolean {
    return colorOfSquare === colorToMatch;
}
 
export function isCorner(row: number, column: number): boolean {
    return (row === 0 && column === 0)
        || (row === 0 && column === 2)
        || (row === 2 && column === 0)
        || (row === 2 && column === 2);
}
 
export function isEdge(row: number, column: number): boolean {
    return (row === 0 && column === 1)
        || (row === 1 && column === 0)
        || (row === 1 && column === 2)
        || (row === 2 && column === 1);
}
 
export function isCenter(row: number, column: number): boolean {
    return row === 1 && column === 1;
}

import type { RubiksCube } from "../../rubiks-cube-model";
import { isYellowFish } from "./yellow-face-algorithm";

export function yellowCrossAlgorithm (rubikscube: RubiksCube): RubiksCube {
    const yellowFace = rubikscube.Down
    
    if (IsYellowCrossPosition(yellowFace)
        || isYellowFish(yellowFace)) {
        
    }
}

export function IsYellowCrossPosition (face: string[][]): Boolean {
    return false
}

function IsYellowSittingPosition (face: string[][]): Boolean {
    return false
}

function IsYellowLayingDownPosition (face: string[][]): Boolean {
    return false
}

function IsYellowDotPosition (face: string[][]): Boolean {
    return false
}
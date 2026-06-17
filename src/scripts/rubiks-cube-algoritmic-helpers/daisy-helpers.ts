import type { RubiksCube } from "../rubiks-cube-model";
import { backFaceRotationLeft, backFaceRotationRight } from "../rubiks-cube-rotations/rubiks-cube-back-rotation";
import { downFaceRotationLeft, downFaceRotationRight } from "../rubiks-cube-rotations/rubiks-cube-down-rotation";
import { frontFaceRotationLeft, frontFaceRotationRight } from "../rubiks-cube-rotations/rubiks-cube-front-rotation";
import { leftFaceRotationDown, leftFaceRotationUp } from "../rubiks-cube-rotations/rubiks-cube-left-rotation";
import { rightFaceRotationDown, rightFaceRotationUp } from "../rubiks-cube-rotations/rubiks-cube-right-rotation";
import { upFaceRotationLeft, upFaceRotationRight } from "../rubiks-cube-rotations/rubiks-cube-up-rotation";
import { hasColor } from "./face-helpers";

const edge: string = 'white';

export function bringWhiteToUpEdge_Top(rubikscube: RubiksCube): RubiksCube {
    // Check Front top edge → one Front-left rotation brings it to Up[2][1],
    // but we want Up[0][1], so we use Back face.
    if (hasColor(rubikscube.Front[0][1], edge)) {
        // Front top → rotate Up left twice + fix, simplest: rotate Front left twice
        rubikscube = frontFaceRotationLeft(rubikscube, 2);
        // Now white is at Back[0][1], rotate Back right once
        rubikscube = backFaceRotationRight(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Back[0][1], edge)) {
        rubikscube = backFaceRotationRight(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Left[0][1], edge)) {
        rubikscube = leftFaceRotationUp(rubikscube, 1);
        rubikscube = backFaceRotationRight(rubikscube, 1);
        rubikscube = leftFaceRotationDown(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Right[0][1], edge)) {
        rubikscube = rightFaceRotationUp(rubikscube, 1);
        rubikscube = backFaceRotationRight(rubikscube, 1);
        rubikscube = rightFaceRotationDown(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Down[0][1], edge)) {
        rubikscube = backFaceRotationRight(rubikscube, 2);
        return rubikscube;
    }
    if (hasColor(rubikscube.Front[1][0], edge)) {
        rubikscube = leftFaceRotationUp(rubikscube, 1);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Front[1][2], edge)) {
        rubikscube = rightFaceRotationUp(rubikscube, 1);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Front[2][1], edge)) {
        rubikscube = frontFaceRotationLeft(rubikscube, 1);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Back[1][0], edge)) {
        rubikscube = leftFaceRotationDown(rubikscube, 1);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Back[1][2], edge)) {
        rubikscube = rightFaceRotationDown(rubikscube, 1);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Back[2][1], edge)) {
        rubikscube = backFaceRotationRight(rubikscube, 2);
        return rubikscube;
    }
    if (hasColor(rubikscube.Left[1][0], edge)) {
        rubikscube = downFaceRotationLeft(rubikscube, 1);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Left[1][2], edge)) {
        rubikscube = frontFaceRotationLeft(rubikscube, 1);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Left[2][1], edge)) {
        rubikscube = leftFaceRotationUp(rubikscube, 2);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Right[1][0], edge)) {
        rubikscube = frontFaceRotationRight(rubikscube, 1);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Right[1][2], edge)) {
        rubikscube = backFaceRotationLeft(rubikscube, 1);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Right[2][1], edge)) {
        rubikscube = rightFaceRotationUp(rubikscube, 2);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Down[1][0], edge)) {
        rubikscube = downFaceRotationLeft(rubikscube, 1);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Down[1][2], edge)) {
        rubikscube = downFaceRotationRight(rubikscube, 1);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
    if (hasColor(rubikscube.Down[2][1], edge)) {
        rubikscube = downFaceRotationLeft(rubikscube, 2);
        return bringWhiteToUpEdge_Top(rubikscube);
    }
 
    // Rotate Up to check if white is already placed elsewhere and we need to cycle
    rubikscube = upFaceRotationLeft(rubikscube, 1);
    return rubikscube;
}
 
/** Fills Up[2][1] (bottom petal) — the edge between Up and Front. */
export function bringWhiteToUpEdge_Bottom(rubikscube: RubiksCube): RubiksCube {
    if (hasColor(rubikscube.Front[0][1], edge)) {
        rubikscube = frontFaceRotationLeft(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Back[0][1], edge)) {
        rubikscube = backFaceRotationLeft(rubikscube, 1);
        rubikscube = downFaceRotationLeft(rubikscube, 2);
        rubikscube = frontFaceRotationLeft(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Left[0][1], edge)) {
        rubikscube = leftFaceRotationUp(rubikscube, 1);
        rubikscube = frontFaceRotationLeft(rubikscube, 1);
        rubikscube = leftFaceRotationDown(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Right[0][1], edge)) {
        rubikscube = rightFaceRotationUp(rubikscube, 1);
        rubikscube = frontFaceRotationLeft(rubikscube, 1);
        rubikscube = rightFaceRotationDown(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Down[2][1], edge)) {
        rubikscube = frontFaceRotationLeft(rubikscube, 2);
        return rubikscube;
    }
    // Rotate Down to find white edges on Down layer and bring to Front
    if (hasColor(rubikscube.Down[0][1], edge)) {
        rubikscube = downFaceRotationLeft(rubikscube, 2);
        return bringWhiteToUpEdge_Bottom(rubikscube);
    }
    if (hasColor(rubikscube.Down[1][0], edge)) {
        rubikscube = downFaceRotationRight(rubikscube, 1);
        return bringWhiteToUpEdge_Bottom(rubikscube);
    }
    if (hasColor(rubikscube.Down[1][2], edge)) {
        rubikscube = downFaceRotationLeft(rubikscube, 1);
        return bringWhiteToUpEdge_Bottom(rubikscube);
    }
    // Side edges of adjacent faces
    if (hasColor(rubikscube.Front[1][0], edge)) {
        rubikscube = frontFaceRotationLeft(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Front[1][2], edge)) {
        rubikscube = frontFaceRotationRight(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Front[2][1], edge)) {
        rubikscube = frontFaceRotationLeft(rubikscube, 2);
        return rubikscube;
    }
 
    rubikscube = downFaceRotationLeft(rubikscube, 1);
    return rubikscube;
}
 
/** Fills Up[1][0] (left petal) — the edge between Up and Left. */
export function bringWhiteToUpEdge_Left(rubikscube: RubiksCube): RubiksCube {
    if (hasColor(rubikscube.Left[0][1], edge)) {
        rubikscube = leftFaceRotationUp(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Front[0][1], edge)) {
        rubikscube = frontFaceRotationRight(rubikscube, 1);
        rubikscube = leftFaceRotationUp(rubikscube, 1);
        rubikscube = frontFaceRotationLeft(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Back[0][1], edge)) {
        rubikscube = backFaceRotationLeft(rubikscube, 1);
        rubikscube = leftFaceRotationUp(rubikscube, 1);
        rubikscube = backFaceRotationRight(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Right[0][1], edge)) {
        rubikscube = rightFaceRotationUp(rubikscube, 1);
        rubikscube = upFaceRotationLeft(rubikscube, 1);
        rubikscube = rightFaceRotationDown(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Down[1][0], edge)) {
        rubikscube = leftFaceRotationDown(rubikscube, 2);
        return rubikscube;
    }
    if (hasColor(rubikscube.Down[0][1], edge)) {
        rubikscube = downFaceRotationRight(rubikscube, 1);
        return bringWhiteToUpEdge_Left(rubikscube);
    }
    if (hasColor(rubikscube.Down[1][2], edge)) {
        rubikscube = downFaceRotationLeft(rubikscube, 1);
        return bringWhiteToUpEdge_Left(rubikscube);
    }
    if (hasColor(rubikscube.Down[2][1], edge)) {
        rubikscube = downFaceRotationLeft(rubikscube, 2);
        return bringWhiteToUpEdge_Left(rubikscube);
    }
    if (hasColor(rubikscube.Left[1][0], edge)) {
        rubikscube = downFaceRotationRight(rubikscube, 1);
        return bringWhiteToUpEdge_Left(rubikscube);
    }
    if (hasColor(rubikscube.Left[1][2], edge)) {
        rubikscube = frontFaceRotationLeft(rubikscube, 1);
        return bringWhiteToUpEdge_Left(rubikscube);
    }
    if (hasColor(rubikscube.Left[2][1], edge)) {
        rubikscube = leftFaceRotationUp(rubikscube, 2);
        return rubikscube;
    }
 
    rubikscube = downFaceRotationLeft(rubikscube, 1);
    return rubikscube;
}
 
/** Fills Up[1][2] (right petal) — the edge between Up and Right. */
export function bringWhiteToUpEdge_Right(rubikscube: RubiksCube): RubiksCube {
    if (hasColor(rubikscube.Right[0][1], edge)) {
        rubikscube = rightFaceRotationUp(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Front[0][1], edge)) {
        rubikscube = frontFaceRotationLeft(rubikscube, 1);
        rubikscube = rightFaceRotationUp(rubikscube, 1);
        rubikscube = frontFaceRotationRight(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Back[0][1], edge)) {
        rubikscube = backFaceRotationRight(rubikscube, 1);
        rubikscube = rightFaceRotationUp(rubikscube, 1);
        rubikscube = backFaceRotationLeft(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Left[0][1], edge)) {
        rubikscube = leftFaceRotationUp(rubikscube, 1);
        rubikscube = upFaceRotationRight(rubikscube, 1);
        rubikscube = leftFaceRotationDown(rubikscube, 1);
        return rubikscube;
    }
    if (hasColor(rubikscube.Down[1][2], edge)) {
        rubikscube = rightFaceRotationDown(rubikscube, 2);
        return rubikscube;
    }
    if (hasColor(rubikscube.Down[0][1], edge)) {
        rubikscube = downFaceRotationLeft(rubikscube, 1);
        return bringWhiteToUpEdge_Right(rubikscube);
    }
    if (hasColor(rubikscube.Down[1][0], edge)) {
        rubikscube = downFaceRotationRight(rubikscube, 1);
        return bringWhiteToUpEdge_Right(rubikscube);
    }
    if (hasColor(rubikscube.Down[2][1], edge)) {
        rubikscube = downFaceRotationLeft(rubikscube, 2);
        return bringWhiteToUpEdge_Right(rubikscube);
    }
    if (hasColor(rubikscube.Right[1][0], edge)) {
        rubikscube = frontFaceRotationRight(rubikscube, 1);
        return bringWhiteToUpEdge_Right(rubikscube);
    }
    if (hasColor(rubikscube.Right[1][2], edge)) {
        rubikscube = backFaceRotationLeft(rubikscube, 1);
        return bringWhiteToUpEdge_Right(rubikscube);
    }
    if (hasColor(rubikscube.Right[2][1], edge)) {
        rubikscube = rightFaceRotationUp(rubikscube, 2);
        return rubikscube;
    }
 
    rubikscube = downFaceRotationLeft(rubikscube, 1);
    return rubikscube;
}
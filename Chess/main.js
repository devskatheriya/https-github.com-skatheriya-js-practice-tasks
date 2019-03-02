

function possibleMovesOfPiece(piece, x_position, y_position) {
    switch (piece) {
        case 'r':
        case 'R': rookPossibleMoves(piece, x_position, y_position); break;
        case 'k':
        case 'K': kingPossibleMoves(piece, x_position, y_position); break;
        case 'q':
        case 'Q': queenPossibleMoves(piece, x_position, y_position); break;
        case 'n':
        case 'N': knightPossibleMoves(piece, x_position, y_position); break;
        case 'b':
        case 'B': bishopPossibleMoves(piece, x_position, y_position); break;
        case 'p':
        case 'P': pawnPossibleMoves(piece, x_position, y_position); break;


        default:
            return;
    }
}


var board = [];
function setChessBoard() {

    board[1] = ['.','r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
    board[2] = ['.','p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'];
    board[3] = ['.','.', '.', '.', '.', '.', '.', '.', '.'];
    board[4] = ['.','.', '.', '.', '.', '.', '.', '.', '.'];
    board[5] = ['.','.', '.', '.', '.', '.', '.', '.', '.'];
    board[6] = ['.','.', '.', '.', '.', '.', '.', '.', '.'];
    board[7] = ['.','P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'];
    board[8] = ['.','R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];
    
}

function printChessBoard() {
    console.log(board);
}
function createChild(td,x_position,y_position){
    if (td.firstChild) {
            td.removeChild(td.childNodes[0]);
    }else if(board[x_position][y_position]=='.'){
        
    }else {
        var img = document.createElement('img');
        let piece = checkPieceOnPoition(x_position,y_position);
        img.setAttribute("src", piece);
        img.setAttribute("width", "100%");
        img.setAttribute("height", "90%");
        td.append(img);
    }
}
function checkPieceOnPoition(x_position,y_position){
    var piece = board[x_position][y_position];
    switch (piece) {
        case 'r': return "Rook-black.ico";
        case 'k': return "King-black.ico";
        case 'q': return "Queen-black.ico";
        case 'n': return "Knight-black.ico";
        case 'b': return "Bishop-black.ico";
        case 'p': return "Pawn-black.ico";

        case 'R': return "Rook-white.ico";
        case 'K': return "King-white.ico";
        case 'Q': return "Queen-white.ico";
        case 'N': return "Knight-white.ico";
        case 'B': return "Bishop-white.ico";
        case 'P': return "Pawn-white.ico";
       
        default:
            return;
    }
}
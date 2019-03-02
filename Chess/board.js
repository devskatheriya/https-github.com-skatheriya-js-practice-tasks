var board = [];
var game_start = false;

function startGame() {
    console.log("Game Start !");
    alert("Game Start!");
    game_start = true;
}

function setChessBoard() {

    board[1] = ['.', 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
    board[2] = ['.', 'p', 'p', 'p', 'p', 'p', '.', 'p', 'p'];
    board[3] = ['.', '.', '.', '.', '.', '.', 'p', '.', '.'];
    board[4] = ['.', '.', '.', '.', 'P', '.', '.', '.', '.'];
    board[5] = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];
    board[6] = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];
    board[7] = ['.', 'P', 'P', 'P', '.', 'P', 'P', 'P', 'P'];
    board[8] = ['.', 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];

}

function printChessBoard() {
    // console.log(board);
}
function createChild(td, x_position, y_position) {
    if (td.firstChild) {
        td.removeChild(td.childNodes[0]);
    } else if (board[x_position][y_position] == '.') {

    } else {
        var img = document.createElement('img');
        let piece = board[x_position][y_position];
        let src = checkItsColor(piece);
        img.setAttribute("src", src);
        img.setAttribute("width", "100%");
        img.setAttribute("height", "90%");
        td.append(img);
    }
}
function checkItsColor(piece) {
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



setChessBoard();
printChessBoard();

function createChessBoardView() {
    var flag = true;
    var chess = document.getElementById("chessboard");
    for (let i = 1; i <= 8; i++) {
        var row = chess.insertRow();
        for (let j = 1; j <= 8; j++) {
            var cell = row.insertCell(-1);
            if (i % 2 == 0 && j % 2 != 0) {
                cell.classList.add("black");

                flag = false;
            } else if (i % 2 != 0 && j % 2 == 0) {
                cell.classList.add("black");
                flag = true;
            } else {
                cell.classList.add("white");
            }
            cell.setAttribute("xPosition", i);
            cell.setAttribute("yPosition", j);
            cell.setAttribute("id", "elem");
            cell.setAttribute("onclick", "");
        }

    }

}


onclick = function () {
    var td = event.target.closest('td');
    var x_position = td.getAttribute('xposition');
    var y_position = td.getAttribute('yposition');
    // console.log(x_position,y_position );

    var td = event.target.closest('td');
    if (game_start) {
        var piece = board[x_position][y_position];
        if (piece != '.')
            possibleMovesOfPiece(piece, x_position, y_position);
    } else {
        createChild(td, x_position, y_position);
    }

};
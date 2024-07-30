//slelectors
const submitNames = document.querySelector(".submitNames");
const p1nameInput = document.getElementById("p1name");
const p2nameInput = document.getElementById("p2name");
const markBoxes = document.querySelectorAll(".markBox");

//variables

//index function for element order
function index(el) {
    if (!el) return -1;
    var i = 0;
    do {
        i++;
    } while (el = el.previousElementSibling);
    return i;
}

//Gameboard TicTacToe
const gameBoard = (function(){
    //fill empty array of size 9
    const board = Array(9).fill();
    
    //players factory function
    const players = (name, mark) => {
        const getName = () => name;
        const getMark = () => mark;
        const setName = (newName) => name = newName;
        
        return { getMark, getName, setName};
    }
    
    //create 2 players with default name values
    let player1 = players("player1", "X");
    let player2 = players("player2", "O");

    let activePlayer = player1;

    const getActivePlayer = () => activePlayer;
    const toggleActivePlayer = () => {
        if(activePlayer == player1)
            activePlayer = player2;
        else 
            activePlayer = player1;
    }

    return {player1, player2, players, board, getActivePlayer, 
        toggleActivePlayer};
})();

//gameController controls the game and checks for winners
const gameController = (function() {

    markBoxes.forEach( box => {
        box.addEventListener("click", () => {
            if(!gameBoard.board[index(box)-1]){
                box.textContent = gameBoard.getActivePlayer().getMark();
                gameBoard.board[index(box)-1] = gameBoard.getActivePlayer().getMark();
                gameBoard.toggleActivePlayer();
                console.log(gameBoard.getActivePlayer().getName());
                console.log(gameBoard.board);
            }else{
                console.log("cant do that");
            }
        });
    });

    return {  };
})();


//submit Click Event Handler to change names of players
submitNames.addEventListener("click", (event)=>{
    event.preventDefault();

    gameBoard.player1.setName (p1nameInput.value);
    gameBoard.player2.setName (p2nameInput.value);
    
    //empty the input entries boxes
    p1nameInput.value = "";
    p2nameInput.value = "";
});
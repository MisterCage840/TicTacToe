//slelectors
const submitNames = document.querySelector(".submitNames");
const p1nameInput = document.getElementById("p1name");
const p2nameInput = document.getElementById("p2name");
const markBoxes = document.querySelectorAll(".markBox");
const gameOverDisplay = document.querySelector(".gameEnd");
const playerTurn = document.querySelector(".playerTurn");
const resetGameBtn = document.querySelector(".resetBtn");
const resetNames = document.querySelector(".resetNames");

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
    let player1 = players("Player1", "X");
    let player2 = players("Player2", "O");

    let activePlayer = player1;

    const getActivePlayer = () => activePlayer;
    const toggleActivePlayer = () => {
        if(activePlayer == player1)
            activePlayer = player2;
        else 
            activePlayer = player1;
    }


    //empty board for resetting
    const emptyBoard = () => {
        for(let j=0; j<board.length; j++){
            board[j] = undefined;
        }
    }

    return {player1, player2, players, board, getActivePlayer, 
        toggleActivePlayer , emptyBoard};
})();



//gameController controls the game and checks for winners
const gameController = (function() {
    //gameOver variable to check if game is over
    let gameOver = false;

    const toggleGameOver = () => {
        if(gameOver == false)
            gameOver = true;
        else
            gameOver = false;
    }

    const getGameOver = () => gameOver;

    playerTurn.textContent = gameBoard.getActivePlayer().getName() + "'s Turn!";

    //click event handler on box
    markBoxes.forEach( box => {
        box.addEventListener("click", () => {
            if(gameOver == false){
                if(!gameBoard.board[index(box)-1]){
                    box.textContent = gameBoard.getActivePlayer().getMark();
                    gameBoard.board[index(box)-1] = gameBoard.getActivePlayer().getMark();
                    console.log(checkWin());
                    gameBoard.toggleActivePlayer();
                    playerTurn.textContent = gameBoard.getActivePlayer().getName() + "'s Turn!";
                    console.log(gameBoard.board);
                }else{
                    console.log("cant do that");
                }
            }
        });
    });

    //check for winning condition
    const checkWin = () => {
        if(gameBoard.board[0]==gameBoard.board[4] && gameBoard.board[4]==gameBoard.board[8] && gameBoard.board[8]==gameBoard.getActivePlayer().getMark())
            {
                toggleGameOver();
                gameOverDisplay.textContent = gameBoard.getActivePlayer().getName() + " wins!"}
        else if(gameBoard.board[0]==gameBoard.board[1] && gameBoard.board[1]==gameBoard.board[2] && gameBoard.board[2]==gameBoard.getActivePlayer().getMark())
            {
                toggleGameOver();
                gameOverDisplay.textContent = gameBoard.getActivePlayer().getName() + " wins!"}
        else if(gameBoard.board[2]==gameBoard.board[5] && gameBoard.board[5]==gameBoard.board[8] && gameBoard.board[8]==gameBoard.getActivePlayer().getMark())
            {
                toggleGameOver();
                gameOverDisplay.textContent = gameBoard.getActivePlayer().getName() + " wins!"}
        else if(gameBoard.board[0]==gameBoard.board[3] && gameBoard.board[3]==gameBoard.board[6] && gameBoard.board[6]==gameBoard.getActivePlayer().getMark())
            {
                toggleGameOver();
                gameOverDisplay.textContent = gameBoard.getActivePlayer().getName() + " wins!"}        
        else if(gameBoard.board[2]==gameBoard.board[4] && gameBoard.board[4]==gameBoard.board[6] && gameBoard.board[6]==gameBoard.getActivePlayer().getMark())
            {
                toggleGameOver();
                gameOverDisplay.textContent = gameBoard.getActivePlayer().getName() + " wins!"}        
        else if(gameBoard.board[0]==gameBoard.board[1] && gameBoard.board[1]==gameBoard.board[2] && gameBoard.board[2]==gameBoard.getActivePlayer().getMark())
            {
                toggleGameOver();
                gameOverDisplay.textContent = gameBoard.getActivePlayer().getName() + " wins!"}        
        else if(gameBoard.board[0]==gameBoard.board[3] && gameBoard.board[3]==gameBoard.board[6] && gameBoard.board[6]==gameBoard.getActivePlayer().getMark())
            {
                toggleGameOver();
                gameOverDisplay.textContent = gameBoard.getActivePlayer().getName() + " wins!"}        
        else if(gameBoard.board[1]==gameBoard.board[4] && gameBoard.board[4]==gameBoard.board[7] && gameBoard.board[7]==gameBoard.getActivePlayer().getMark())
            {
                toggleGameOver();
                gameOverDisplay.textContent = gameBoard.getActivePlayer().getName() + " wins!"}        
        else if(gameBoard.board[2]==gameBoard.board[5] && gameBoard.board[5]==gameBoard.board[8] && gameBoard.board[8]==gameBoard.getActivePlayer().getMark())
            {
                toggleGameOver();
                gameOverDisplay.textContent = gameBoard.getActivePlayer().getName() + " wins!"}    
        else if(gameBoard.board[3]==gameBoard.board[4] && gameBoard.board[4]==gameBoard.board[5] && gameBoard.board[5]==gameBoard.getActivePlayer().getMark())
            {
                toggleGameOver();
                gameOverDisplay.textContent = gameBoard.getActivePlayer().getName() + " wins!"}       
        else if(gameBoard.board[6]==gameBoard.board[7] && gameBoard.board[7]==gameBoard.board[8] && gameBoard.board[8]==gameBoard.getActivePlayer().getMark())
            {
                toggleGameOver();
                gameOverDisplay.textContent = gameBoard.getActivePlayer().getName() + " wins!"}

        else if(gameBoard.board.includes(undefined))
            gameOverDisplay.textContent = "Ongoing game";
        else{ 
            toggleGameOver();
            gameOverDisplay.textContent = "Tied game";  
        } 
    }

    //empty display boxes
    const emptyBoxes = () => {
        markBoxes.forEach (box => {
            box.textContent = "";
        })
    }


    //game Reset
    resetGameBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if(getGameOver() == true)
            toggleGameOver();
        if(gameBoard.getActivePlayer().getMark() == "O")
            gameBoard.toggleActivePlayer();
        playerTurn.textContent = gameBoard.getActivePlayer().getName() + "'s Turn!";
        gameOverDisplay.textContent = "";
        gameBoard.emptyBoard();
        emptyBoxes();
    })

    resetNames.addEventListener("click", () => {
        gameBoard.player1.setName ("Player1");
        gameBoard.player2.setName ("Player2");
        playerTurn.textContent = gameBoard.getActivePlayer().getName() + "'s Turn!";
    })

    return { checkWin, toggleGameOver , getGameOver , emptyBoxes };
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
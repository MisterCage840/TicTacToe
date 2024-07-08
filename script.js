function createPlayer(name, mark){
    let markcounter =0;

    const getMark = () => mark;
    const increaseCounter = ()=> markcounter++;
    const getCounter = () => markcounter;

    return {name, mark, increaseCounter, getCounter, getMark};
}

const gameBoard = (function createGameboard(){
    const player1 = createPlayer("Player1","X");
    const player2 = createPlayer("Player2","O");
    
    const gameGrid = Array.apply(null, Array(9));
    console.log(gameGrid);

    const checkGame = () => {
        if(gameGrid[0] == "X" && gameGrid[1]=="X" && gameGrid[2]=="X")
        return "Player1 wins!";
        else if(gameGrid[3] == "X" && gameGrid[4]=="X" && gameGrid[5]=="X")
        return "Player1 wins!";
        else if(gameGrid[6] == "X" && gameGrid[7]=="X" && gameGrid[8]=="X")
        return "Player1 wins!";
        else if(gameGrid[0] == "X" && gameGrid[4]=="X" && gameGrid[8]=="X")
        return "Player1 wins!";
        else if(gameGrid[2] == "X" && gameGrid[4]=="X" && gameGrid[6]=="X")
        return "Player1 wins!";
        else if(gameGrid[0] == "X" && gameGrid[3]=="X" && gameGrid[6]=="X")
        return "Player1 wins!";
        else if(gameGrid[1] == "X" && gameGrid[4]=="X" && gameGrid[7]=="X")
        return "Player1 wins!";
        else if(gameGrid[2] == "X" && gameGrid[5]=="X" && gameGrid[8]=="X")
        return "Player1 wins!";

        else if(gameGrid[0] == "O" && gameGrid[1]=="O" && gameGrid[2]=="O")
            return "Player2 wins!";
        else if(gameGrid[3] == "O" && gameGrid[4]=="O" && gameGrid[5]=="O")
            return "Player2 wins!";
        else if(gameGrid[6] == "O" && gameGrid[7]=="O" && gameGrid[8]=="O")
            return "Player2 wins!";
        else if(gameGrid[0] == "O" && gameGrid[4]=="O" && gameGrid[8]=="O")
        return "Player2 wins!";
        else if(gameGrid[2] == "O" && gameGrid[4]=="O" && gameGrid[6]=="O")
        return "Player2 wins!";
        else if(gameGrid[0] == "O" && gameGrid[3]=="O" && gameGrid[6]=="O")
        return "Player2 wins!";
        else if(gameGrid[1] == "O" && gameGrid[4]=="O" && gameGrid[7]=="O")
        return "Player2 wins!";
        else if(gameGrid[2] == "O" && gameGrid[5]=="O" && gameGrid[8]=="O")
        return "Player2 wins!";
        else for(let i=0; i<gameGrid.length;i++){
            if(gameGrid[i])
                ;
            else {
                return "Ongoing Game";
            }
        }  
        return "Tied Game!";
        

    }

    const addMarker = (playerObj, gridCell) => {
        if(!gameGrid[gridCell]){
        gameGrid[gridCell] = playerObj.getMark();
        playerObj.increaseCounter();
        playerObj.getCounter();
        console.log(gameGrid);
        console.log(checkGame());
    
        return gameGrid[gridCell];
        }else{
            console.log(gameGrid);
            console.log("This box is already taken!");
        }
    }

    return {player1,player2,addMarker,gameGrid,checkGame};
})();

gameBoard.addMarker(gameBoard.player1,2);
gameBoard.addMarker(gameBoard.player2,1);
gameBoard.addMarker(gameBoard.player1,4);
gameBoard.addMarker(gameBoard.player2,3);
gameBoard.addMarker(gameBoard.player2,5);
gameBoard.addMarker(gameBoard.player1,6);
gameBoard.addMarker(gameBoard.player1,5);
gameBoard.addMarker(gameBoard.player1,7);
gameBoard.addMarker(gameBoard.player2,8);

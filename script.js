//console.log('connected')
const cellArray = document.querySelectorAll('.cell')
const resetButton = document.querySelector("#reset")
const scoreBoard = document.querySelector('#scoreboard')

let turn ='x'
let moves = ["","","","","","","","",""];
  
let counter = 0;
//Cell Array, addEventListeners & cellClick function
function cellClick(){
    if (turn == 'x' && this.classList.contains('clicked') == false){
        this.classList.add('clicked')
        this.style.backgroundColor = 'blue';
        moves[this.id] = turn;
        winLogic()
        counter ++;
        turn = 'o'
    } else if (turn == 'o' && this.classList.contains('clicked') == false){
        this.style.backgroundColor = 'red';
        this.classList.add('clicked')
        moves[this.id] = turn;
        winLogic()
        counter ++;
        turn ='x'
    };
};
cellArray.forEach(cell => cell.addEventListener('click', cellClick));

//Reset Button
resetButton.addEventListener('click',()=>{
    cellArray.forEach(cell => {
        if (cell.classList.contains('clicked') == true){
            cell.classList.remove('clicked')
            cell.style.backgroundColor = 'white'
            moves = ["","","","","","","","",""];
            counter = 0;
            scoreBoard.innerHTML = ""

        }
    });
    cellArray.forEach(cell => cell.addEventListener('click', cellClick));
});

//Scoring
// 1. If a player has won, display a message with which player won the game (i.e. red or blue)
// 2. If all the squares are filled in and no player has won yet, display a message saying it's a tie
// 3. In both cases, the users should be able to reset the game

//Winning Combinations
// 0, 1, 2     // 0, 3, 6    // 0, 4, 8
// 3, 4, 5     // 1, 4, 7    // 2, 4, 6 
// 6, 7, 8     // 2, 5, 8

function removeEvents(){
    cellArray.forEach((cell) =>{
        cell.removeEventListener('click', cellClick)
    })
}; 

function winLogic(){
    if (moves[0] === moves[1] && moves[1] === moves[0] && moves[0] != ""){
        scoreBoard.innerHTML = `${turn} is the winner!`
        removeEvents();
    } else if (moves[3] === moves[4] && moves[4] === moves[5] && moves[3] != ""){
        scoreBoard.innerHTML = `${turn} is the winner!`
        removeEvents();
    } else if (moves[6] === moves[7] && moves[7] === moves[8] && moves[6] != ""){
        scoreBoard.innerHTML = `${turn} is the winner!`
        removeEvents();
    } else if (moves[0] === moves[3] && moves[3] === moves[6] && moves[0] != ""){
        scoreBoard.innerHTML = `${turn} is the winner!`
        removeEvents();
    } else if (moves[1] === moves[4] && moves[4] === moves[7] && moves[1] != ""){
        scoreBoard.innerHTML = `${turn} is the winner!`
        removeEvents();
    } else if (moves[2] === moves[5] && moves[5] === moves[8] && moves[2] != ""){
        scoreBoard.innerHTML = `${turn} is the winner!`
        removeEvents();
    } else if (moves[0] === moves[4] && moves[4] === moves[8] && moves[0] != ""){
        scoreBoard.innerHTML = `${turn} is the winner!`
        removeEvents();
    } else if (moves[2] === moves[4] && moves[4] === moves[6] && moves[2] != ""){
        scoreBoard.innerHTML = `${turn} is the winner!`
        removeEvents();
    } else if (counter === 9) {
        scoreBoard.innerHTML = "No Winner!"
        removeEvents();
    }
};
    


     
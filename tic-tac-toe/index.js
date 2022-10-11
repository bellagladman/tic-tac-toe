const cellList = document.querySelectorAll("div.cell");
// const cells = Array.from(cellList);

const whoseTurn = document.querySelector("div.whoseTurnIsIt");

let player1sturn = true;

// if (player1sturn) {
//     whoseTurn.innerText = "Player 1, it's your turn";
//     let mark = 'X';
// } else {
//     whoseTurn.innerText = "Player 2, it's your turn";
//     mark = 'O';
// }

// when cell is clicked, 

const gameBoard = document.querySelector("div.board");
gameBoard.addEventListener('click', () => {
    if (player1sturn) {
        whoseTurn.classList.remove('player2')
        whoseTurn.classList.add('player1')
        whoseTurn.innerText = "Player 1, it's your turn"
        player1sturn = false;

    } else {
        whoseTurn.classList.remove('player1')
        whoseTurn.classList.add('player2')
        whoseTurn.innerText = "Player 2, it's your turn"
        player1sturn = true;
    }
})


console.log(gameBoard.children);

// for (const cell of gameBoard.children) {
//     cell.addEventListener('click', (e, mark) => {cell.innerText = mark})

// }




// const playerState = () => {}
    
// const playTurn = () => {}





// cells.forEach(cell => {cell.addEventListener('click', () => {
//         if ((cell.innerText !== 'X' && cell.innerText !== 'O'))
//         {   
//             cell.innerText = 'X'
//         } else {
            
//         }
//     })
// })


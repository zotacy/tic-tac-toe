//console.log('connected')

const grid = document.querySelector('.grid')
const cellArray = document.querySelectorAll('.cell')
const resetButton = document.querySelector("#reset")

let turn ='x'
function cellClick(event){
    if (turn == 'x' && this.classList.contains('clicked') == false){
        this.classList.add('clicked')
        this.style.backgroundColor = 'blue';
        turn = 'o'
    } else if (turn == 'o' && this.classList.contains('clicked') == false){
        this.style.backgroundColor = 'red';
        this.classList.add('clicked')
        turn ='x'
    };
};
cellArray.forEach(cell => {
    cell.addEventListener('click', cellClick)
});
resetButton.addEventListener('click',()=>{
    cellArray.forEach(cell => {
        if (cell.classList.contains('clicked') == true){
            cell.classList.remove('clicked')
            cell.style.backgroundColor = 'white'
        }
    });
});


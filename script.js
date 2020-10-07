//console.log('connected')

const grid = document.querySelector('.grid')
const cellArray = document.querySelectorAll('.cell')

function cellClick(){
    console.log(`You clicked a cell!`);
};
cellArray.forEach((cell) => cell.addEventListener('click', cellClick))

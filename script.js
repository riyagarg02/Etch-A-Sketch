let color = 'black';
let click = false;

document.addEventListener('DOMContentLoaded', function(){
    createBoard(16);

    document.querySelector('body').addEventListener('click', function(e){
        if(e.target.tagName != 'BUTTON'){
            click = !click;
        }
    })

    let sizeBtn = document.querySelector('#size-btn');
    sizeBtn.addEventListener('click', () => {
        let size = getSize();
        createBoard(size);
    });   
});

randomBtn.addEventListener('click', () => {
    colorDiv();
})

function createBoard(size){

    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for( let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover',colorDiv)
        board.insertAdjacentElement('beforeend', div);

    }

}

function getSize(){
    let input = prompt("Enter the size");
    let message = document.querySelector("#message");
    message.style.fontSize = '15px';
    if(input == ""){
        message.textContent = 'Enter a number!';
    } else if(input < 0 || input > 100){
        message.textContent = 'Provide a number between 1 to 100';
    } else{
        message.textContent = 'size changed';
        return input;
    }

}

function colorDiv(){
    if(click){
        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100% , 50%)`;
        } else{
            this.style.backgroundColor = 'black';
        }
    }

}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = 'white')
}
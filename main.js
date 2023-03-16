const container = document.querySelector('#container');
const defaultSize = 16;
let currentSize = defaultSize



clearBtn();
gameStart();
sizeSelect();


function setCurrentSize(newSize){
 currentSize = newSize
}



function gameStart(){
    spawnGrid(defaultSize);
    fill();
}

function clearBtn(){
    document.querySelector('#clear').addEventListener('click' , function(){
       clearGrid();
       spawnGrid(currentSize);
       fill();
       
    })
}

function sizeSelect(){
    document.querySelector('#sizeOne').addEventListener('click' , function() {
        clearGrid();
        spawnGrid(16);
        setCurrentSize(16);
        fill();
    })
    document.querySelector('#sizeTwo').addEventListener('click' , function(){
        clearGrid();
        spawnGrid(32);
        setCurrentSize(32);
        fill();
    })
    document.querySelector('#sizeThree').addEventListener('click' , function(){
        clearGrid();
        spawnGrid(64);
        setCurrentSize(64);
        fill();
    })
    document.querySelector('#sizeFour').addEventListener('click' , function () {
        clearGrid();
        spawnGrid(96);
        setCurrentSize(96);
        fill();
    })
}

function clearGrid(){
    container.innerHTML = '';
}


function spawnGrid(e) {

for(i = 0; i < (e * e); i++){
const newDiv = document.createElement('div');
container.style.gridTemplateColumns = `repeat(${e}, 1fr)`
container.style.gridTemplateRows = `repeat(${e}, 1fr)`
newDiv.classList.add('boxes');
container.appendChild(newDiv);
}}



function fill() {
const test = document.getElementsByClassName('boxes');
const array = Array.from(test);
array.forEach(div => {
    div.addEventListener ('mouseover' , function() {
        div.style.backgroundColor = "black";
    })
})
}








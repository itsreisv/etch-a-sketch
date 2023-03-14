const container = document.querySelector('#container');


for(i = 0; i < 256; i++){
const newDiv = document.createElement('div');
newDiv.classList.add('boxes');


container.appendChild(newDiv);
}


function fill() {
const test = document.getElementsByClassName('boxes');
const array = Array.from(test);
array.forEach(div => {
    div.addEventListener ('mouseover' , function() {
        div.style.backgroundColor = "black";
        console.log(div);
    })
})
}
fill();




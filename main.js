const container = document.querySelector('#container');


for(i = 0; i < 256; i++){
const newDiv = document.createElement('div');
newDiv.classList.add('boxes');


container.appendChild(newDiv);
}



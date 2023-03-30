let container = document.querySelector('.container');
let modalContainer = document.querySelector('.modal-container');
modalContainer.style.display = 'none';
let firstClass = document.querySelector('.first');
let btn = document.querySelector('.btn');
btn.addEventListener('click', modalHandler)
function modalHandler() {
    firstClass.style.filter = 'blur(10px)'
    container.style.display = 'none';
    modalContainer.style.display = 'block'
}
document.body.addEventListener('keyup', keyUpHandler);
function keyUpHandler(event) {
    if (event.key === 'Escape') {
        modalContainer.style.display = 'none'
        firstClass.style.filter = 'blur(0px)'
        container.style.display = 'block';
    }
}
let closeIcon = document.querySelector('.close');
closeIcon.addEventListener('click', closeHandler);
function closeHandler() {
    modalContainer.style.display = 'none'
    firstClass.style.filter = 'blur(0px)'
    container.style.display = 'block';
}

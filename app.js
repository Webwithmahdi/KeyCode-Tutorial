const key=document.querySelector('.key');
const keyCodee=document.querySelector('.keycode');
window.addEventListener("keypress",keyCode);
function keyCode(e){
    key.innerText='Key : '+e.key;
    keyCodee.innerText='Key code : '+e.keyCode;
}
let open = document.getElementById('open');
let close = document.getElementById('close');
let menu = document.getElementById('menu')
open.addEventListener('click',()=>{
    menu.classList.toggle('hidden')
    close.classList.toggle('hidden');
    open.classList.toggle('hidden')
})
close.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
    open.classList.toggle('hidden');
    close.classList.toggle('hidden')
})
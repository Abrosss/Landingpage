const burger = document.getElementById('burger')
const navcontent = document.querySelector('.nav')
const hide = document.getElementById('maintitle')
const hidearrow =document.querySelector('.arrow')
const opacity = document.querySelector('.burger')

burger.addEventListener('click', () =>{

    navcontent.classList.toggle('show')
    hide.classList.toggle ('hide')
    hidearrow.classList.toggle ('hide')
    opacity.classList.toggle('opacity')




})




// document.getElementById('burger').addEventListener('click', menu)

// function menu(){
//     navcontent.classList.toggle('show ')
// }
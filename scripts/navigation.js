
//Store the selected elements that we are going to use
const hambutton= document.querySelector('#hamburger')
const mainnav= document.querySelector('#navbar')

//Toggle the Show Class on and off
hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('show')
    hambutton.classList.toggle('show')
}) 
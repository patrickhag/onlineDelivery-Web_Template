//JS
// console.log('hello')
const menuToggle = document.querySelector('.menu-toggle')
const navbar = document.querySelector('.navbar')
const collapsibleMenu = document.querySelector('.collapsible-menu')

menuToggle.addEventListener('click', ()=>{
	navbar.classList.toggle('show-menu')
	if (navbar.classList.contains('show-menu')) {
		collapsibleMenu.style.maxHeight = collapsibleMenu.scrollHeight + 'px'
		setTimeout(() =>{
		collapsibleMenu.style.overlow = 'hidden'			
		}, 300)
	} else {
		collapsibleMenu.style.maxHeight = '0px'
		collapsibleMenu.style.maxHeight = 'visible'
	}
}) 

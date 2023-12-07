const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn')

menuBtn.addEventListener('click',function(){
  if(menu.style.display === "none"){
    menu.style.display = "flex"
  }else{
    menu.style.display = "none"
  }
})
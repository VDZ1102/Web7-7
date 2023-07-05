const PageUp_btn = document.querySelector('.PageUp i')

PageUp_btn.addEventListener('click', () =>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
})

const Menu_btn=document.querySelector('.tonggle__button');
const item1=document.querySelector('.Header .DropDown');


Menu_btn.addEventListener('click',()=>{
    item1.classList.toggle('active')
})

window.addEventListener("load", function() {
    setTimeout(function() {
      openPopup();
    }, 6000); // 1 phút = 60.000 milliseconds
  });
  
  function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "flex";
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
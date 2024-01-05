let currentSlide = 0;
const tabItems = document.querySelectorAll('.tab__items');
tabItems[currentSlide].classList.add('active');
tabItems.forEach(items=>items.classList.add('inactive'))
function showSlide(index) {
  tabItems[currentSlide].classList.remove('active');
  currentSlide = (index + tabItems.length) % tabItems.length;
  tabItems[currentSlide].classList.add('active');
}

function changeSlide(direction) {
  showSlide(currentSlide - direction);
}
function showSlideME(direction) {
    showSlide(currentSlide + direction);
  }


// bottom to top 
const btn__up=document.querySelector('.btn__up');
window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop>20 || document.body.scrollTop>20){
        btn__up.style.display='flex'
    }else{
        btn__up.style.display='none'
    }
})
btn__up.addEventListener('click', ()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})
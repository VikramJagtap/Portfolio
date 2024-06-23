AOS.init();

var typed = new Typed('#element1', {
  strings: [' "Crafting beautiful, high-performing websites from server-side to userinterface." '],
  typeSpeed: 50,
});

var typed = new Typed('#element2', {
  strings: [' "I am a Full Stack Java Developer." '],
  typeSpeed: 50,
});

function handleOnScroll() {
    const header = document.getElementById('header');
    header.classList.toggle('sticky', scrollY > 150);
    header.color('white');
    const element = document.getElementsByTagName('nav');
    element.style.backgroundColor('black');
  }
    
let currentDate = new Date();
let output = currentDate.getFullYear();

document.getElementById('currentYear').innerHTML = `<span>${output}</span>`;

//owl-carousel

$(document).ready(function(){
  $('.myCarousel').owlCarousel({
    items : 3,
    margin: 10,
    loop: true,
    mouseDrag : false,
    nav : true,
    lazyLoad : true, 
    autoplay : true,
    autoplayTimeout : 4000,
    autoplayHoverPause : true,
    responsive : {
      0 : {
        items : 1
      },
      480 : {
        items : 1
      },
      768 : {
        items : 2
      },
      992 : {
        items : 3
      }
    }
  });


  $('.owl-prev').empty().append('<i class="bi bi-arrow-left-square-fill"></i>');
  $('.owl-next').empty().append('<i class="bi bi-arrow-right-square-fill"></i>');
});

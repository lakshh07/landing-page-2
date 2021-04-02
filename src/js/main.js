function disableScrolling() { 
    setTimeout(function() { 
        document.body.style.overflow = 'hidden'; 
    }, 1000); 
}
function enableScrolling() { 
    document.body.style.overflow = ''; 
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}


const navUl = document.getElementById('nav-ul');
const toggleMenu = document.querySelector(".toggle-menu");
const player = document.querySelector("lottie-player");
const noTransitionClass = "no-transition";
let timer;

toggleMenu.addEventListener("click", function (e) {
    e.preventDefault();
    navUl.classList.toggle('show');
    if (navUl.classList.contains('show')) {
      this.setAttribute("aria-label", "Close navigation");
      this.setAttribute("aria-expanded", "true");
      player.getLottie().playSegments([0, 200], true);
    //   player.getLottie().playSegments([0, 45], true);
    } else {
      this.setAttribute("aria-label", "Open navigation");
      this.setAttribute("aria-expanded", "false");
    //   player.getLottie().playSegments([45,0], true);
      player.getLottie().playSegments([200, 0], true);
    }
  });
  
window.addEventListener("resize", function () {
    navUl.classList.add(noTransitionClass);
    clearTimeout(timer);
    timer = setTimeout(function () {
      navUl.classList.remove(noTransitionClass);
    }, 500);
  });


const scrollToTopButton = document.getElementById('topButton');
const scrollFunc = () => {
  let y = window.scrollY;
  
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 500) {
    scrollToTopButton.classList.add('fadeIn');
    scrollToTopButton.classList.remove('fadeOut');
  } else {
    scrollToTopButton.className = "topButton fadeOut";
  }
};

window.addEventListener("scroll", scrollFunc);
// const scrollToTop = () => {
//   // Let's set a variable for the number of pixels we are from the top of the document.
//   const c = document.documentElement.scrollTop || document.body.scrollTop;
//   if (c > 0) {
//     window.requestAnimationFrame(scrollToTop);
//     // Increase the '10' value to get a smoother/slower scroll!
//     window.scrollTo(0);
//   }
// };

// scrollToTopButton.onclick = function(e) {
//   e.preventDefault();
//   scrollToTop();
// }

$(window).scroll(function(){
  inViewport();
});
$(window).resize(function(){
  inViewport();
});
function inViewport(){
  $('.progress-line').each(function(){
    var divPos = $(this).offset().top,
            topOfWindow = $(window).scrollTop();
    
    if( divPos < topOfWindow+550 ){
      $(this).addClass('animate');
    } else{
      $(this).removeClass('animate');
    }
  });
}



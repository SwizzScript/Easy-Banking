const easyNav = document.getElementById("easyNavbar");
const easyHamburger = document.getElementById("hambuger");
const easyHero = document.getElementById("imageHero");
const imageMockup = document.getElementById("imageMockup");


// if (window.innerWidth < 1000) {
//   easyNav.style.display = 'none';
// } else {
//   easyNav.style.display = 'flex';
// }
easyNav.style.display = 'none';

window.addEventListener('resize', () => {
 if (window.innerWidth < 1000) {
   easyHero.src = "./images/bg-intro-mobile.svg";
 } else {
  easyNav.style.display = 'none';
  easyHero.src = "./images/bg-intro-desktop.svg";
 }
})


easyHamburger.addEventListener('click', () => {
  if (easyHamburger.getAttribute('switch') === 'closed') {
    easyNav.style.display = 'flex';
    easyHamburger.setAttribute('switch', 'opened');
    easyHamburger.src = "./images/icon-close.svg";
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflowY = 'hidden';
  } else {
    easyNav.style.display = 'none';
    easyHamburger.setAttribute('switch', 'closed');
    easyHamburger.src = "./images/icon-hamburger.svg";
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflowY = 'auto';
  }
})

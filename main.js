/* carousel */ 
document.querySelectorAll('.show-neighbors .carousel-item').forEach(item => {
  let next = item.nextElementSibling;
  if (!next) {
    next = Array.from(item.parentElement.children).find(child => child !== item);
  }
  if (next) {
    const firstChild = next.firstElementChild;
    if (firstChild) {
      item.appendChild(firstChild.cloneNode(true));
    }
  }
});

document.querySelectorAll('.carousel-item').forEach(item => {
  let prev = item.previousElementSibling;
  if (!prev) {
    prev = item.parentElement.lastElementChild;
  }
  if (prev) {
    const secondLastChild = prev.children[prev.children.length - 2];
    if (secondLastChild) {
      item.insertBefore(secondLastChild.cloneNode(true), item.firstChild);
    }
  }
})

const showForm = e => {
  document.querySelector('form').classList.remove('d-none');
  e.target.remove();
}

const submit = () => wizardStep('1');
  
const wizardStep = step => {
  const wizard = document.querySelectorAll(`#wizard  .wizard-step`); 
  wizard[step].classList.remove('active');
  let intStep = parseInt(step);
  let nextStep = (intStep === 0) ? '1' : step;
  wizard[nextStep].classList.add('active');
  wizardList(nextStep);
}

const wizardList = step => {
  if (step === '0') {    
    Array.from(document.querySelector(`#wizard .wizard-list`).children).forEach(item => {
      item.classList.add('disabled')
    })
    document.querySelector(`#wizard .wizard-list`).children[0].classList.remove('disabled');
  } else {
    console.log(step);
    const disabledItem = document.querySelectorAll(`#wizard .wizard-list .disabled`);
    disabledItem.forEach(item => item.classList.remove('disabled'))
    document.querySelector(`#wizard .wizard-list`).children[0].classList.add('disabled');
  }
}

/* swiper */

var swiper1 = new Swiper(".galeriaSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 25, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, 
  mousewheel: true,
  keyboard: true,
});

var swiper2 = new Swiper(".menuSwiper", {
  slidesPerView: 3.3,
  spaceBetween: 9, 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, 
  mousewheel: true,
  keyboard: true,
});
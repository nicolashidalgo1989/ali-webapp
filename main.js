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
  
  hideOptionsElements();
  document.querySelector('form').classList.remove('d-none');
  e.target.remove();
}

const hideOptionsElements = () => {
  document.querySelectorAll('#opciones .card.opcion').forEach( card => {
    card.querySelector('a').classList.toggle('d-none')
    card.querySelector('.card-footer').classList.toggle('d-none')
  })
}
  
const wizardStep = step => { 
  const wizard = document.querySelectorAll(`#wizard .wizard-step`);   
  let nextStep = '0';
  nextStep = parseInt(step) + 1; 
  wizard[step].classList.remove('active'); 
  wizard[nextStep].classList.add('active');
  wizardList(step, nextStep);
}

const wizardList = (prev, actual) => {
  const prevStep = document.querySelector(`#wizard .wizard-list`).children[prev];
  const actualStep = document.querySelector(`#wizard .wizard-list`).children[actual];
  prevStep.classList.add('visited');
  prevStep.classList.remove('active');
  actualStep.classList.add('active');
  actualStep.classList.remove('disabled'); 
}

const rebootWizard = () => {
  const wizard = document.querySelectorAll(`#wizard .wizard-step`); 
  const steppers = document.querySelectorAll(`#wizard .wizard-list .wizard-item`);
  steppers.forEach( step => {
    step.classList.remove('visited');
    step.classList.remove('active');
    step.classList.add('disabled')
  })
  steppers[0].classList.add('active');
  steppers[0].classList.remove('disabled');
  wizard.forEach( e => e.classList.remove('active'))
  wizard[0].classList.add('active'); 
  hideOptionsElements();
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
  slidesPerView: 1,
  spaceBetween: 18,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, 
  breakpoints: {
    420:{
      slidesPerView: 2,
      spaceBetween: 18,
    }, 
    820: {
      slidesPerView: 3.3,
      spaceBetween: 9,
    },    
    960:{
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1140: {
      slidesPerView: 3.3,
      spaceBetween: 9,
    },    
  },
  mousewheel: true,
  keyboard: true,
});
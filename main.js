const wizardStep = (e, step) => {
    const wizardId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('id');
    const wizard = document.querySelectorAll(`#${wizardId} .wizard-step`);
    wizard[step].classList.remove('active');
    let intStep = parseInt(step);
    let nextStep = (intStep === 0) ? '1' : '0';
    wizard[nextStep].classList.add('active');
    wizardList(nextStep, wizardId);
  }

  const wizardList = (step, wizardId) => {
    if (step === '0') { 
      Array.from(document.querySelector(`#${wizardId} .wizard-list`).children).forEach(item => { 
        item.classList.add('disabled') 
      })
      document.querySelector(`#${wizardId} .wizard-list`).children[0].classList.remove('disabled');
    } else {
      const disabledItem = document.querySelectorAll(`#${wizardId} .wizard-list .disabled`);
      disabledItem.forEach(item => item.classList.remove('disabled'))
      document.querySelector(`#${wizardId} .wizard-list`).children[0].classList.add('disabled');
    }
  }

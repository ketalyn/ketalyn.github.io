const blendModeInputs = [...document.querySelectorAll('input[name="blendMode"]')]
const dotSizeInput = document.querySelector('#dotSize')
const contrastInput = document.querySelector('#contrast')
const radiusInput = document.querySelector('#dotRadius')
const invertInput = document.querySelector('#invert')
const sizeLabel = document.querySelector('[data-size]')
const contrastLabel = document.querySelector('[data-contrast]')
const dotRadiusLabel = document.querySelector('[data-radius]')

blendModeInputs.forEach((input) => {
  input.addEventListener('change', (e) => {
    document.body.style.setProperty('--blendMode', e.target.value)
  })
})

dotSizeInput.addEventListener('input', (e) => {
  document.body.style.setProperty('--size', `${e.target.value}rem`)
  sizeLabel.innerText = `${e.target.value}rem`
})

contrastInput.addEventListener('input', (e) => {
  document.body.style.setProperty('--contrast', e.target.value)
  contrastLabel.innerText = e.target.value
})

invertInput.addEventListener('change', (e) => {
  const val = e.target.checked ? 1 : 0
  document.body.style.setProperty('--invert', val)
})

radiusInput.addEventListener('input', (e) => {
  document.body.style.setProperty('--dotRadius', `${e.target.value}%`)
  dotRadiusLabel.innerText = `${e.target.value}rem`
})


const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){
        if(text.includes('hello')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Hi';
            texts.appendChild(p);
        }
        p = document.createElement('p');
    }
    
        console.log(text);
})

recognition.addEventListener('end', ()=>{
    recognition.start();
})

recognition.start();
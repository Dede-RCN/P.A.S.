/*
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
setupCounter(document.querySelector('#counter'))

*/


const form       = document.getElementById('form');
const campos     = document.querySelectorAll('.required');
const spans      = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

function setError(index){
  campos[index].style.border = '5px solid #e63636';
  spans[index].style.display = 'block';
}

function removeError(index){
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function emailValido(){
  const email = campos[0].value.trim();

  if (email === "") {
    removeError(0);
    return;
  }

  if(!emailRegex.test(campos[0].value))
  {setError(0);}
  else{removeError(0);}
}
//------------------------------------------------------------------------
const forms = document.querySelector('form');

forms.addEventListener('submit', (e) => {
  e.preventDefault();

  emailjs.init("sUtuqL_B0tgWO3q0W");
  
  emailjs.sendForm('service_tkzrspf', 'template_kzlvc73', forms)
    .then(() => {
      alert('Inscrição realizada com sucesso!');
      forms.reset();
    }, (error) => {
      alert('Ocorreu um erro ao enviar o formulário: ' + JSON.stringify(error));
    }); 
});
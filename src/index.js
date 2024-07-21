// import { nanoid } from 'nanoid';
// const model = {};
// console.log((model.id = nanoid(3)));
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

Toastify({
  text: '` 1 /n 2`',
  duration: 3000, // ms === 3s
  destination: 'https://google.com',
  newWindow: true,
  close: true,
  gravity: 'top', // `top` or `bottom`
  position: 'center', // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: 'linear-gradient(to right, #00b09b, #96c93d)',
  },
  onClick: function () {}, // Callback after click
}).showToast();

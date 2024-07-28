import Chart from 'chart.js/auto';

// import { nanoid } from 'nanoid';
// console.log(nanoid());

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

import {
  alert,
  defaultModules,
} from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

defaultModules.set(PNotifyMobile, {});

alert({
  text: 'Notice me, Yura!',
});

//

const canva = document.querySelector('#chart');

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

const chart = new Chart(canva, {
  type: 'line',
  data: {
    labels: data.map(row => row.year),
    datasets: [
      {
        label: 'Acquisitions by year',
        data: data.map(row => row.count),
      },
    ],
  },
});

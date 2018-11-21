'use strict';

const form = document.querySelector('form');

window.onbeforeprint = prepareLabel;
window.onafterprint = purgeLabel;

// form.addEventListener('click', function (event) {
//   event.preventDefault();

//   const target = event.target;

//   if (target.classList.contains('print-button')) {
//     window.print();
//   }
// });

function prepareLabel() {

}

function purgeLabel() {

}
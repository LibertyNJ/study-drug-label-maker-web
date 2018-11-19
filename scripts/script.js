'use strict';

const printButton = document.getElementById('print-button');

printButton.addEventListener('click', function (event) {
  event.preventDefault();
  window.print();
})

window.onbeforeprint = prepareLabel;
window.onafterprint = purgeLabel;

function prepareLabel() {

}

function purgeLabel() {

}
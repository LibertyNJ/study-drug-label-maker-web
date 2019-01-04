'use strict';

const VERSION_NUMBER = 'b6';
const versionElement = document.getElementById('version');
versionElement.textContent = `Version ${VERSION_NUMBER}`;

const formElement = document.getElementsByTagName('form')[0];
const formControlElements = document.querySelectorAll('.form__control');

const labelElement = document.querySelector('.label');
const labelFieldElements = document.querySelectorAll('.label-field');

let drugHasNoStrength = false;
let overrideRxNumber = false;

hideForm();
hideElement(labelElement);

formElement.addEventListener('input', (event) => formInputHandler(event));
formElement.addEventListener('submit', (event) => formSubmitHandler(event));

window.addEventListener('beforeprint', (event) => preFlight(event));
window.addEventListener('afterprint', (event) => postFlight(event));

function formInputHandler(event) {
  const eventTarget = event.target;

  if (eventTarget.name === 'label-type') {
    setLabelType();
    updateLabelLayout();
    updateFormLayout();
    showForm();

  } else if (eventTarget.name === 'drug-no-strength') {

    if (eventTarget.checked === true) {
      drugHasNoStrength = true;

    } else {
      drugHasNoStrength = false;
    }

    updateFormLayout();
    updateLabel();

  } else if (eventTarget.name === 'rx-number-override') {

    if (eventTarget.checked === true) {
      overrideRxNumber = true;

    } else {
      overrideRxNumber = false;
    }

    updateFormLayout();
    updateLabel();

  } else {
    updateLabel();
  }

  function setLabelType() {
    labelElement.classList.remove('standard', 'infusion', 'hidden');
    labelElement.classList.add(eventTarget.value);
  }

  function showForm() {
    for (let child of formElement.children) {
      showElement(child);
    }
  }

  function updateLabelLayout() {
    for (let labelFieldElement of labelFieldElements) {
      showElement(labelFieldElement);

      if (!(labelFieldElement.classList.contains(eventTarget.value))) {
        hideElement(labelFieldElement);
      }
    }
  }

  function updateFormLayout() {
    for (let formControl of formControlElements) {
      const formFieldElement = formControl.children[1];

      if (eventTarget.name === 'label-type') {
        showElement(formControl);

        if (!(formFieldElement.classList.contains('optional'))) {
          formFieldElement.required = true;
        }

        if (!(formControl.classList.contains(eventTarget.value))) {
          formFieldElement.required = false;
          hideElement(formControl);
        }
      }

      if (formFieldElement.id === 'drug-strength') {

        if (drugHasNoStrength) {
          formFieldElement.required = false;
          hideElement(formControl);

        } else {
          formFieldElement.required = true;
          showElement(formControl);
        }
      }

      if (formFieldElement.id === 'rx-number') {

        if (overrideRxNumber) {
          formFieldElement.required = true;
          showElement(formControl);

        } else {
          formFieldElement.required = false;
          hideElement(formControl);
        }
      }
    }
  }

  function updateLabel() {
    const patient = {
      name: {
        last: getElementValueById('patient-last-name'),
        first: getElementValueById('patient-first-name'),
        middleInitial: getElementValueById('patient-middle-initial')
      },

      dob: {
        full: new Date(getElementValueById('patient-dob') + 'T00:00:00'),
        get month() { return (this.full.getMonth() || this.full.getMonth() === 0) ? padLeadingZeros(this.full.getMonth() + 1, 2) : '' },
        get date() { return (this.full.getDate()) ? padLeadingZeros(this.full.getDate(), 2) : '' },
        get year() { return (this.full.getFullYear()) ? padLeadingZeros(this.full.getFullYear(), 4) : '' }
      },

      address: {
        street: getElementValueById('patient-address-1'),
        apartment: getElementValueById('patient-address-2'),
        city: getElementValueById('patient-city'),
        state: getElementValueById('patient-state'),
        zipCode: getElementValueById('patient-zip-code')
      }
    };

    const study = {
      protocol: getElementValueById('protocol'),
      rxNumber: getElementValueById('rx-number'),
      patientNumber: getElementValueById('patient-number')
    };

    const drug = {
      name: getElementValueById('drug-name'),
      strength: (drugHasNoStrength) ? '' : getElementValueById('drug-strength'),
      form: getElementValueById('drug-form'),
      manufacturer: getElementValueById('drug-manufacturer'),

      diluent: {
        name: getElementValueById('drug-diluent'),
        volume: getElementValueById('drug-diluent-volume')
      },

      quantity: getElementValueById('drug-quantity'),
      rate: getElementValueById('drug-rate'),
      sig: getElementValueById('sig'),

      expiration: {
        full: new Date(getElementValueById('expiration-datetime')),
        get month() { return (this.full.getMonth() || this.full.getMonth() === 0) ? padLeadingZeros(this.full.getMonth() + 1, 2) : '' },
        get date() { return (this.full.getDate()) ? padLeadingZeros(this.full.getDate(), 2) : '' },
        get year() { return (this.full.getFullYear()) ? padLeadingZeros(this.full.getFullYear(), 4) : '' },
        get hours() { return (this.full.getHours()) ? padLeadingZeros(this.full.getHours(), 2) : '' },
        get minutes() { return (this.full.getMinutes()) ? padLeadingZeros(this.full.getMinutes(), 2) : '' }
      },

      preparation: {
        full: new Date(getElementValueById('preparation-datetime')),
        get month() { return (this.full.getMonth() || this.full.getMonth() === 0) ? padLeadingZeros(this.full.getMonth() + 1, 2) : '' },
        get date() { return (this.full.getDate()) ? padLeadingZeros(this.full.getDate(), 2) : '' },
        get year() { return (this.full.getFullYear()) ? padLeadingZeros(this.full.getFullYear(), 4) : '' },
        get hours() { return (this.full.getHours()) ? padLeadingZeros(this.full.getHours(), 2) : '' },
        get minutes() { return (this.full.getMinutes()) ? padLeadingZeros(this.full.getMinutes(), 2) : '' }
      }
    };

    const prescriber = getElementValueById('prescriber');
    const pharmacist = getElementValueById('pharmacist');

    const label = {
      name: document.querySelector('.label__patient-name'),
      dob: document.querySelector('.label__patient-dob'),
      addressLine1: document.querySelector('.label__patient-address-1'),
      addressLine2: document.querySelector('.label__patient-address-2'),

      protocol: document.querySelector('.label__protocol'),
      rxNumber: document.querySelector('.label__rx-number'),
      patientNumber: document.querySelector('.label__patient-number'),

      drug: document.querySelector('.label__drug'),
      manufacturer: document.querySelector('.label__drug-manufacturer'),
      quantity: document.querySelector('.label__drug-quantity'),
      sig: document.querySelector('.label__sig'),
      diluent: document.querySelector('.label__drug-diluent'),
      rate: document.querySelector('.label__drug-rate'),

      expiration: document.querySelector('.label__expiration-datetime'),
      preparation: document.querySelector('.label__preparation-datetime'),

      prescriber: document.querySelector('.label__prescriber'),
      pharmacist: document.querySelector('.label__pharmacist')
    };

    label.name.textContent = (!patient.name.last && !patient.name.first && !patient.name.middleInitial) ? 'Patient name' : `${patient.name.last}${(patient.name.last && patient.name.first) ? ',' : ''} ${patient.name.first} ${patient.name.middleInitial}${(patient.name.middleInitial) ? '.' : ''}`;
    label.dob.textContent = `DoB: ${patient.dob.month}${(patient.dob.month && patient.dob.date) ? '/' : ''}${patient.dob.date}${(patient.dob.date && patient.dob.year) ? '/' : ''}${patient.dob.year}`;
    label.addressLine1.textContent = (!patient.address.street && !patient.address.apartment) ? 'Patient address line 1' : `${patient.address.street}${(patient.address.apartment) ? ', ' : ''}${patient.address.apartment}`;
    label.addressLine2.textContent = (!patient.address.city && !patient.address.state && !patient.address.zipCode) ? 'Patient address line 2' : `${patient.address.city}${(patient.address.city) ? ', ' : ''} ${patient.address.state} ${patient.address.zipCode}`;

    label.protocol.textContent = `Protocol: ${study.protocol}`;
    label.rxNumber.textContent = (overrideRxNumber) ? `Rx #${study.rxNumber}` : 'Rx #';
    label.patientNumber.textContent = `Patient #${study.patientNumber}`;

    label.drug.textContent = (!drug.name && !drug.strength && !drug.form) ? 'Medication information' : `${drug.name}${(drug.name && drug.strength) ? ', ' : ''}${drug.strength} ${(labelElement.classList.contains('standard')) ? drug.form : ''}`;
    label.manufacturer.textContent = `Mfr: ${drug.manufacturer}`;
    label.quantity.textContent = `Qty: ${drug.quantity}`;
    label.sig.textContent = (!drug.sig) ? 'Sig' : drug.sig;
    label.diluent.textContent = (!drug.diluent.name && !drug.diluent.volume) ? 'Diluent information' : `${(drug.diluent.name) ? 'in ' : ''}${drug.diluent.name}${(drug.diluent.name && drug.diluent.volume) ? ', ' : ''}${drug.diluent.volume}`;
    label.rate.textContent = `Rate: ${drug.rate}`;

    label.expiration.textContent = `Exp: ${drug.expiration.month}${(drug.expiration.month && drug.expiration.date) ? '/' : ''}${drug.expiration.date}${(drug.expiration.date && drug.expiration.year) ? '/' : ''}${drug.expiration.year} ${drug.expiration.hours}${(drug.expiration.hours && drug.expiration.minutes) ? ':' : ''}${drug.expiration.minutes}`;
    label.preparation.textContent = `Prep: ${drug.preparation.month}${(drug.preparation.month && drug.preparation.date) ? '/' : ''}${drug.preparation.date}${(drug.preparation.date && drug.preparation.year) ? '/' : ''}${drug.preparation.year} ${drug.preparation.hours}${(drug.preparation.hours && drug.preparation.minutes) ? ':' : ''}${drug.preparation.minutes}`;

    label.prescriber.textContent = `Prescriber: ${prescriber}`;
    label.pharmacist.textContent = `Pharmacist: ${pharmacist}`;
  }
}

function formSubmitHandler(event) {
  event.preventDefault();
  window.print();
  sendDataToDatabaseHandler();
}

function getElementValueById(fieldId) {
  return document.getElementById(fieldId).value;
}

function hideElement(element) {
  element.classList.add('hidden');
}

function hideForm() {
  for (let child of formElement.children) {
    if (child.tagName != 'FIELDSET') {
      hideElement(child);
    }
  }
}

function padLeadingZeros(number, zeros) {
  return number.toString().padStart(zeros, '0');
}

function postFlight() {
  removePrintCopies();

  function removePrintCopies() {
    const printCopies = document.querySelectorAll('.print-copy');
    for (let printCopy of printCopies) {
      printCopy.remove();
    }
  }
}

function preFlight() {
  const now = {
    full: new Date(),
    get year() { return padLeadingZeros(this.full.getFullYear(), 4) },
    get month() { return padLeadingZeros(this.full.getMonth() + 1, 2) },
    get date() { return padLeadingZeros(this.full.getDate(), 2) },
    get hours() { return padLeadingZeros(this.full.getHours(), 2) },
    get minutes() { return padLeadingZeros(this.full.getMinutes(), 2) },
    get seconds() { return padLeadingZeros(this.full.getSeconds(), 2) }
  };

  if (!overrideRxNumber) stampRxNumber();
  stampDispensedDatetime();
  createPrintCopies();

  function createPrintCopies() {
    const labelPreviewElement = document.getElementById('label-preview');

    let copiesToPrint = +getElementValueById('copies');

    while (copiesToPrint > 1) {
      let newPrintCopy = document.createElement('article');
      newPrintCopy.classList.add('print-copy');

      for (let item of labelElement.classList) {
        newPrintCopy.classList.add(item);
      }

      newPrintCopy.innerHTML = labelElement.innerHTML;

      labelPreviewElement.append(newPrintCopy);

      copiesToPrint--;
    }
  }

  function stampDispensedDatetime() {
    const labelDispensedDatetime = document.querySelector('.label__dispensed-datetime');
    labelDispensedDatetime.textContent = `Date and time: ${now.month}/${now.date}/${now.year} ${now.hours}:${now.minutes}`;
  }

  function stampRxNumber() {
    const labelRxNumber = document.querySelector('.label__rx-number');
    labelRxNumber.textContent = `Rx #${now.year}${now.month}${now.date}${now.hours}${now.minutes}${now.seconds}`;
  }
}

function showElement(element) {
  element.classList.remove('hidden');
}

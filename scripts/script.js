'use strict';

let now, currentYear, currentMonth, currentDate, currentHours, currentMinutes, currentSeconds;

updateCurrentTime();

const form = document.forms[0];

const formElement = document.getElementsByTagName('form')[0];

const formControls = document.querySelectorAll('.form-control');

const labelFields = document.querySelectorAll('.label-field');

const VERSION_NUMBER = 'a1';

const versionElement = document.getElementById('version');

versionElement.textContent = `Version ${VERSION_NUMBER}`;

hideForm();

function hideForm() {
  for (let child of formElement.children) {
    if (child.tagName != 'FIELDSET') {
      child.classList.add('hidden');
    }
  }
}

function displayForm() {
  for (let child of formElement.children) {
    child.classList.remove('hidden')
  }
}

const label = document.getElementById('label');

label.classList.add('hidden');

//Type selector
form.addEventListener('click', function (event) {
  const target = event.target;

  if (target.name == 'label-type') {
    label.classList.remove('standard', 'infusion', 'hidden');
    label.classList.add(target.value);

    for (let formControl of formControls) {
      formControl.classList.remove('hidden');

      if (!(formControl.children[1].classList.contains('optional'))) {
        formControl.children[1].required = true;
      }

      if (!(formControl.classList.contains(target.value))) {
        formControl.classList.add('hidden');
        formControl.children[1].required = false;
      }
    }

    for (let labelField of labelFields) {
      labelField.classList.remove('hidden');

      if (!(labelField.classList.contains(target.value))) {
        labelField.classList.add('hidden');
      }
    }

    displayForm();
  }
});

//Preview updater
form.addEventListener('input', updateLabelPreview);

function updateLabelPreview() {
  const patientLastName = document.getElementById('patient-last-name').value;
  const patientFirstName = document.getElementById('patient-first-name').value;
  const patientMiddleInitial = document.getElementById('patient-middle-initial').value;
  const patientDob = new Date(document.getElementById('patient-dob').value + 'T00:00:00');
  const patientAddress1 = document.getElementById('patient-address-1').value;
  const patientAddress2 = document.getElementById('patient-address-2').value;
  const patientCity = document.getElementById('patient-city').value;
  const patientState = document.getElementById('patient-state').value;
  const patientZipCode = document.getElementById('patient-zip-code').value;
  const protocol = document.getElementById('protocol').value;
  const rxNumber = document.getElementById('rx-number').value;
  const drugName = document.getElementById('drug-name').value;
  const drugStrength = document.getElementById('drug-strength').value;
  const drugForm = document.getElementById('drug-form').value;
  const drugManufacturer = document.getElementById('drug-manufacturer').value;
  const drugDiluent = document.getElementById('drug-diluent').value;
  const drugDiluentVolume = document.getElementById('drug-diluent-volume').value;
  const drugQuantity = document.getElementById('drug-quantity').value;
  const drugRate = document.getElementById('drug-rate').value;
  const sig = document.getElementById('sig').value;
  const expirationDatetime = new Date(document.getElementById('expiration-datetime').value);
  const preparationDatetime = new Date(document.getElementById('preparation-datetime').value);
  const prescriber = document.getElementById('prescriber').value;
  const pharmacist = document.getElementById('pharmacist').value;

  const labelPatientName = document.getElementById('label-patient-name');
  const labelPatientDob = document.getElementById('label-patient-dob');
  const labelPatientAddress1 = document.getElementById('label-patient-address-1');
  const labelPatientAddress2 = document.getElementById('label-patient-address-2');
  const labelProtocol = document.getElementById('label-protocol');
  const labelDrug = document.getElementById('label-drug');
  const labelDrugManufacturer = document.getElementById('label-drug-manufacturer');
  const labelDrugQuantity = document.getElementById('label-drug-quantity');
  const labelSig = document.getElementById('label-sig');
  const labelDrugDiluent = document.getElementById('label-drug-diluent');
  const labelDrugRate = document.getElementById('label-drug-rate');
  const labelExpirationDatetime = document.getElementById('label-expiration-datetime');
  const labelPreparationDatetime = document.getElementById('label-preparation-datetime');
  const labelPrescriber = document.getElementById('label-prescriber');
  const labelPharmacist = document.getElementById('label-pharmacist');

  const patientDobMonth = (patientDob.getMonth() || patientDob.getMonth() === 0) ? (patientDob.getMonth() + 1).toString().padStart(2, '0') : '';
  const patientDobDate = (patientDob.getDate()) ? patientDob.getDate().toString().padStart(2, '0') : '';
  const patientDobYear = (patientDob.getFullYear()) ? patientDob.getFullYear().toString().padStart(4, '0') : '';

  const expirationMonth = (expirationDatetime.getMonth() || expirationDatetime.getMonth() === 0) ? (expirationDatetime.getMonth() + 1).toString().padStart(2, '0') : '';
  const expirationDate = (expirationDatetime.getDate()) ? expirationDatetime.getDate().toString().padStart(2, '0') : '';
  const expirationYear = (expirationDatetime.getFullYear()) ? expirationDatetime.getFullYear().toString().padStart(4, '0') : '';
  const expirationHours = (expirationDatetime.getHours()) ? expirationDatetime.getHours().toString().padStart(2, '0') : '';
  const expirationMinutes = (expirationDatetime.getMinutes()) ? expirationDatetime.getMinutes().toString().padStart(2, '0') : '';

  const preparationMonth = (preparationDatetime.getMonth() || preparationDatetime.getMonth() === 0) ? (preparationDatetime.getMonth() + 1).toString().padStart(2, '0') : '';
  const preparationDate = (preparationDatetime.getDate()) ? preparationDatetime.getDate().toString().padStart(2, '0') : '';
  const preparationYear = (preparationDatetime.getFullYear()) ? preparationDatetime.getFullYear().toString().padStart(4, '0') : '';
  const preparationHours = (preparationDatetime.getHours()) ? preparationDatetime.getHours().toString().padStart(2, '0') : '';
  const preparationMinutes = (preparationDatetime.getMinutes()) ? preparationDatetime.getMinutes().toString().padStart(2, '0') : '';

  labelPatientName.textContent = `${patientLastName}${(patientLastName && patientFirstName) ? ',' : ''} ${patientFirstName} ${patientMiddleInitial}${(patientMiddleInitial) ? '.' : ''}`;
  labelPatientDob.textContent = `DoB: ${patientDobMonth}${(patientDobMonth && patientDobDate) ? '/' : ''}${patientDobDate}${(patientDobDate && patientDobYear) ? '/' : ''}${patientDobYear}`;
  labelPatientAddress1.textContent = `${patientAddress1}${(patientAddress2) ? ', ' : ''}${patientAddress2}`;
  labelPatientAddress2.textContent = `${patientCity}${(patientCity) ? ', ' : ''}${patientState} ${patientZipCode}`;
  labelProtocol.textContent = `Protocol: ${protocol}`;
  labelDrug.textContent = `${drugName}${(drugName && drugStrength) ? ', ' : ''}${drugStrength} ${(label.classList.contains('standard')) ? drugForm : ''}`;
  labelDrugManufacturer.textContent = `Mfr: ${drugManufacturer}`;
  labelDrugQuantity.textContent = `Qty: ${drugQuantity}`;
  labelSig.textContent = sig;
  labelDrugDiluent.textContent = `${(drugDiluent) ? 'in ' : ''}${drugDiluent}${(drugDiluent && drugDiluentVolume) ? ', ' : ''}${drugDiluentVolume}`;
  labelDrugRate.textContent = `Rate: ${drugRate}`;
  labelExpirationDatetime.textContent = `Exp: ${expirationMonth}${(expirationMonth && expirationDate) ? '/' : ''}${expirationDate}${(expirationDate && expirationYear) ? '/' : ''}${expirationYear} ${expirationHours}${(expirationHours && expirationMinutes) ? ':' : ''}${expirationMinutes}`;
  labelPreparationDatetime.textContent = `Prep: ${preparationMonth}${(preparationMonth && preparationDate) ? '/' : ''}${preparationDate}${(preparationDate && preparationYear) ? '/' : ''}${preparationYear} ${preparationHours}${(preparationHours && preparationMinutes) ? ':' : ''}${preparationMinutes}`;
  labelPrescriber.textContent = `Prescriber: ${prescriber}`;
  labelPharmacist.textContent = `Pharmacist: ${pharmacist}`;
}

//Print function
form.addEventListener('submit', function (event) {
  event.preventDefault();
  window.print();
});

window.onbeforeprint = prepareLabel;
window.onafterprint = purgeLabel;

function prepareLabel() {
  updateCurrentTime();
  stampRxNumber();
  stampDispensedDatetime();

  function stampDispensedDatetime() {
    const labelDispensedDatetime = document.getElementById('label-dispensed-datetime');
    labelDispensedDatetime.textContent = `Date and time: ${currentMonth}/${currentDate}/${currentYear} ${currentHours}:${currentMinutes}`;
  }

  function stampRxNumber() {
    const labelRxNumber = document.getElementById('label-rx-number');
    labelRxNumber.textContent = `Rx #${currentYear}${currentMonth}${currentDate}${currentHours}${currentMinutes}${currentSeconds}`;
  }
}

function purgeLabel() {

}


function makeFieldRequired(field) {
  field.required = true;
}

function makeFieldNotRequired(field) {
  field.required = false;
}

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

function updateCurrentTime() {
  now = new Date();

  currentYear = now.getFullYear().toString().padStart(4, '0');
  currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
  currentDate = now.getDate().toString().padStart(2, '0');
  currentHours = now.getHours().toString().padStart(2, '0');
  currentMinutes = now.getMinutes().toString().padStart(2, '0');
  currentSeconds = now.getSeconds().toString().padStart(2, '0');
}
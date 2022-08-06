// https://calculator.swiftutors.com/tension-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const tensionRadio = document.getElementById('tensionRadio');
const MassRadio = document.getElementById('massRadio');
const accelerationRadio = document.getElementById('accelerationRadio');
const gravityRadio = document.getElementById('gravityRadio');

let tension;
let mass = v1;
let acceleration = v2;
let gravity = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

tensionRadio.addEventListener('click', function() {
  variable1.textContent = 'Mass';
  variable2.textContent = 'Acceleration';
  variable3.textContent = 'Gravity';
  mass = v1;
  acceleration = v2;
  gravity = v3;
  result.textContent = '';
});

massRadio.addEventListener('click', function() {
  variable1.textContent = 'Tension';
  variable2.textContent = 'Acceleration';
  variable3.textContent = 'Gravity';
  tension = v1;
  acceleration = v2;
  gravity = v3;
  result.textContent = '';
});

accelerationRadio.addEventListener('click', function() {
  variable1.textContent = 'Tension';
  variable2.textContent = 'Mass';
  variable3.textContent = 'Gravity';
  tension = v1;
  mass = v2;
  gravity = v3;
  result.textContent = '';
});

gravityRadio.addEventListener('click', function() {
  variable1.textContent = 'Tension';
  variable2.textContent = 'Mass';
  variable3.textContent = 'Acceleration';
  tension = v1;
  mass = v2;
  acceleration = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(tensionRadio.checked)
    result.textContent = `Tension = ${computeTension().toFixed(2)}`;

  else if(massRadio.checked)
    result.textContent = `Mass = ${computeMass().toFixed(2)}`;

  else if(accelerationRadio.checked)
    result.textContent = `Acceleration = ${computeAcceleration().toFixed(2)}`;

  else if(gravityRadio.checked)
    result.textContent = `Gravity = ${computeGravity().toFixed(2)}`;
})

// calculation

function computeTension() {
  return Number(mass.value) * (Number(acceleration.value) + Number(gravity.value));
}

function computeMass() {
  return Number(tension.value) / (Number(acceleration.value) + Number(gravity.value));
}

function computeAcceleration() {
  return (Number(tension.value) - (Number(mass.value) * Number(gravity.value))) / Number(mass.value);
}

function computeGravity() {
  return (Number(tension.value) - (Number(mass.value) * Number(acceleration.value))) / Number(mass.value);
}
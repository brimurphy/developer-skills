// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
// PROBLEM 1:
// We work for a company building a smart thermoneter. Our most recent task is this: "Given an array oy temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? 
//     Answer: difference between highest and lowest temp.
//   - How to compute max and min temperatures?
//   - What's a sensor error? And what do we do with it.   

// 2) Breaking it up into sub-problems
// - How to ignore errors?
//   - Find max value in temp array  
//   - Find min value in temp array
//   - Subtract min from max (amplitude) and return it. 

function calcTempAmplitude(temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;

    if (curTemp > max) max = curTemp;

    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temperatures
// 1) Understanding the problem
// -With 2 arrays, should we implement functionality twice? 
// NO! Just merge 2 arrays

// 2) Breaking it up into sub-problems
// - Merge 2 arrays?

function calcTempAmplitudeNew(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;

    if (curTemp > max) max = curTemp;

    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
}

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

function measureKelvin() {
  const measurement = {
    type: `temp`,
    unit: `celsius`,
    // C) FIX BUG
    // value: Number(prompt(`Degrees celsius:`)),
    value: 10,
  };
  //  B) FIND BUG
  console.log(measurement.value);
  //   console.log(measurement);
  console.table(measurement);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
}
// A) IDENTIFY BUG10

console.log(measureKelvin());

// Using Debugger
function calcTempAmplitudeBug(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  //  C) FIX BUG
  let max = 0; // temps[0] instead of 0 for fix
  let min = 0; // temps[0] instead of 0 for fix
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;

    // B) FIND BUG
    // debugger;
    if (curTemp > max) max = curTemp;

    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
}

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY BUG
console.log(amplitudeBug);

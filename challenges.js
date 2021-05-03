// 1) Understanding the problem
// - Array transformed to string, seperated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform into a string
// - Transform each element to string with °C
// - String needs to contain day (index + 1)
// - And ...between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let forecast = [];
  let forecastString;
  for (let i = 0; i < arr.length; i++) {
    let day = `... ${arr[i]}°C in ${i + 1} days`;
    forecast.push(day);
    forecastString = String(forecast.join(' '));
  }
  console.log(forecastString + ' ...');
}
const temps1 = printForecast(data1);
const temps2 = printForecast(data2);

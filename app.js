const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
 
const giveAway = document.querySelector(`.giveaway`);
const deadline = document.querySelector(`.deadline`);
const items = document.querySelectorAll(`.deadline-format h4`);
 
let futureDate = new Date(2023, 2, 31, 8,30,0);
// console.log(futureDate);
let year = futureDate.getFullYear();
let hour = futureDate.getHours();
let minutes = futureDate.getMinutes();
let date = futureDate.getDate()

let month = futureDate.getMonth();
month = months[month];

let day = weekdays[futureDate.getDay()];
// OR
// let day = futureDate.getDay();
// day = weekdays[day]

giveAway.textContent = `Giveaway ends on ${day} ${date} ${month} ${year} ${hour}:${minutes}am`

//Future time count
const futureTime = futureDate.getTime();
// console.log(futureTime);

function setTime (){
  const currentTime = new Date().getTime();
  const t = futureDate - currentTime;

  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1day = 24hr

  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  //day
  let days = t/oneDay;
  days = Math.floor(days)

  //hours
  let hours = t/oneHour;
  hours = Math.floor((t%oneDay)/oneHour);
  //minutes
  let minutes = Math.floor((t%oneHour)/oneMinute);
  //seconds
  let seconds = Math.floor((t%oneMinute)/1000);

  const values = [days, hours, minutes, seconds]

  function format(item){
    if(item<10){
      return (item = `0${item}`);
    }
    return item
  }
  
items.forEach(function(items, index){
  items.innerHTML = format(values[index]);
})

if(t<0){
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
}

}
let countdown = setInterval(setTime, 1000);
setTime();

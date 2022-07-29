window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
let searchbar = document.querySelector(".searchbar");
let input = document.querySelector(".searchbar>input");

input.addEventListener("focusin", () => {
searchbar.classList.add("seachbar-border");
});

input.addEventListener("focusout", () => {
searchbar.classList.remove("seachbar-border");
});


setInterval(() => {
  showdate()
}, 1000);

let date = document.getElementById('date');
let time = document.getElementById('time');
function showdate(){
  let dt = new Date();
  
  // Get time for autoupdate
  let hours = dt.getHours()<10?`0${dt.getHours()}`:dt.getHours();
  let AMPM = hours>11?'PM':'AM';
  hours = hours>12?hours-12:hours;
  hours = hours==00?12:hours;
  let minutes = dt.getMinutes()<10?`0${dt.getMinutes()}`:dt.getMinutes();
  let fullTime = `${hours}:${minutes} ${AMPM}`;

  
  // get date for autoupdate
  let month = dt.getMonth()+1;
  let day = dt.getDate();
  let year = dt.getFullYear();
  let fullDate = `${month}/${day}/${year}`;
  
  time.textContent = fullTime;
  date.innerHTML = fullDate;
}
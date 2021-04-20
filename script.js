const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

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

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
      days += `<button>${i}</button>`;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

class website {
  constructor(name, URL, weeklyDues){
    this.name = name;
    this.URL = URL;
    this.weeklyDues = weeklyDues;
  }
}

const frameW = document.querySelector(".sites");
const websites = document.querySelector(".ss");
let todos = "";
let site = [new website("Zybooks" ,"https://www."+"Zybooks.com", ["Readings due Friday"]), new website("Mimir" ,"https://www."+"mimirhq.com", ["HW due Friday", "LW due Saturday"])];

UpdateText(site)

document.getElementById("add").addEventListener("click", () => {
  
  wName =   prompt("Add Website: ", "Website Name");
  wURL =   prompt("Website URL: (do not enter 'www.')", "Ex: google.com");
  wDue = prompt("Due Dates: (Seperate with ', ')", "Ex: HW due Friday, LW due Saturday").split(", ");
  site.push(new website(wName, "https://www."+wURL, wDue));
  
  UpdateText(site)
  
});

function UpdateText(site) {
  for (i = 0; i < site.length; i++) {
    todos += `<a class="ss" target="_blank" href=${site[i].URL}>${site[i].name}</a>`;
    for (j = 0; j < site[i].weeklyDues.length; j++){
      todos += ` <p class="ss">-  ${site[i].weeklyDues[j]}</p>`;
    }
    todos += `<p class="ss">&#8213&#8213&#8213&#8213&#8213&#8213&#8213&#8213&#8213&#8213&#8213&#8213&#8213&#8213&#8213&#8213</p>`;
  } 
  todos += `<button class = "addbutton" id= "add">Add New Class</button>`;
  websites.innerHTML = todos;
};
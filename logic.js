let inputDate = document.getElementById("calendar");
let Today = new Date().toISOString().split("T")[0];
inputDate.setAttribute("max", Today);
let Day = document.getElementById("Days");
let Month = document.getElementById("Months");
let Year = document.getElementById("Years");
let Result = document.querySelector(".result");

const button = document.getElementById("button");

function yearOld() {
  let todayDate = new Date();
  let birthDate = new Date(inputDate.value);
  Result.style.display = "block";

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let d2 = todayDate.getDate();
  let m2 = todayDate.getMonth() + 1;
  let y2 = todayDate.getFullYear();

  let m = m2 - m1;
  let y = y2 - y1;
  let d = d2 - d1;

  Day.innerHTML = d;
  Month.innerHTML = m;
  Year.innerHTML = y; 

  console.log("Days Old : " + d + "Months Old : " + m + "Years Old : " + y ) ; 

  if (d < 0) {
    const today = new Date() ; 
    const previousMonthDays = new Date(today.getFullYear(), today.getMonth(), 0) ; 
    d = d + previousMonthDays.getDate() ; 
    m -= 1 ; 
    Day.innerHTML = d ; 
    Month.innerHTML = m ; 
    Year.innerHTML = y ; 
  }

  if ( m < 0 ) { 
    m += 12 ; 
    y -= 1 ; 
    Month.innerHTML = m ; 
    Year.innerHTML = y ; 
  }
}

button.addEventListener("click", () => {
  yearOld();
});

const btn = document.querySelector(".confirm");
const form = document.getElementById("form");
const results = document.querySelector(".results");
let pop = document.querySelector(".population");
let res = document.querySelector(".respondents");

function show() {
  document.getElementById("popup").style.display = "block";
}

function hide() {
  document.getElementById("popup").style.display = "none";
}

//generate X number(respondents) of random numbers from entered maximum number(population) without duplicate

// Add event listener to check inputs on change

function checkInputs() {
  // Disable button if either input is empty or not a number or respondents is greater than population
  if (
    pop.value.trim() === "" ||
    isNaN(pop.value) ||
    res.value.trim() === "" ||
    isNaN(res.value) ||
    parseInt(res.value) >= parseInt(pop.value)
  ) {
    btn.disabled = true;
    //console.log(pop.value, res.value);
  } else {
    btn.disabled = false;
    //console.log(pop.value, res.value);
  }
}

pop.addEventListener("input", checkInputs);
res.addEventListener("input", checkInputs);

btn.addEventListener("click", function () {
  var randomNumbers = [];
  while (randomNumbers.length < parseInt(res.value)) {
    var randomNum = Math.floor(Math.random() * parseInt(pop.value)) + 1; //generate random numbers
    if (randomNumbers.indexOf(randomNum) === -1) {
      randomNumbers.push(randomNum);
    }
  }
  console.log(randomNumbers);

  results.innerHTML = randomNumbers;

  show(); //shows popup
  form.reset(); //reset form after submit
  checkInputs();
});

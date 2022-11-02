let Name = "Raihan";

function SID(year, dept, roll) {
  return year + dept + roll;
}

var li1 = document.createElement("li");
li1.innerHTML = Name + " - " + SID("22", "312", "007");
document.body.appendChild(li1);

console.log("I'm Developer B");

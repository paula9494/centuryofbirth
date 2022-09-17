

const personsName = prompt("Your name");
const yearOfBirth = Number(prompt("Your year of birth"));
if (yearOfBirth >= 0) {
  let centuryOfBirth = (Math.floor((yearOfBirth - 1) / 100)) + 1;

  console.log(`${personsName} was born in ${centuryOfBirth} century.`);
}

else {
  let centuryOfBirth = (Math.floor((yearOfBirth - 100) / 100)) + 1;
  console.log(`${personsName} was born in ${centuryOfBirth} century.`);
}


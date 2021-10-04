import academic from "./scientists.js";

// console.table(academic); // test array

// //task 1: return array scientist who was born at 19 centuary
function findScientistOf19Century(academic) {
  return academic
    .filter(({ born }) => born >= 1800 && born <= 1900)
    .map(({ name, surname }) => `${name} ${surname}`);
}

console.table(findScientistOf19Century(academic));

// //task 2: return of the sum of years lived by scientists
function findAllSumAgesLiviedScientist(academic) {
  return academic
    .map(({ born, dead }) => dead - born)
    .reduce((allAges, age) => allAges + age, 0);
}

console.log(findAllSumAgesLiviedScientist(academic));

//task 3: sort scientist by alphabet
function sortScientistByName(academic) {
  return academic.sort((a, b) => compare(a, b, "name"));
}

console.table(sortScientistByName(academic));

//task 4: Sort by ages livied the scientist
function sortByLiviedYear(academic) {
  return academic
    .reduce((academicArr, { name, surname, born, dead }) => {
      let age = dead - born;
      let fullName = `${name} ${surname}`;
      academicArr.push({ fullName, age });
      return academicArr;
    }, [])
    .sort((a, b) => compare(b, a, "age"));
}

console.table(sortByLiviedYear(academic));

//task 5: Delete scientist who was born in 15,16,17 centuaty: rework to random centuary
function deleteOlderLiviedScientist(academic, centuaty) {
  return academic.filter(({ born }) => {
    if (born > centuaty) {
      return born;
    } else {
      let index = academic.indexOf(born);
      academic.splice(index, 1);
    }
  });
}

console.table(deleteOlderLiviedScientist(academic, 1700));

//task 6: find tho yanger scientist in arr
function findYoungestScientist(academic) {
  return academic.sort((a, b) => compare(b, a, "born"))[0];
}

console.table(findYoungestScientist(academic));

//task 7: Find the Albert Enstein : modify to another scientist
function findNameAndBitrthdayScientist(academic, searchFullName) {
  return academic
    .filter(({ name, surname, born }) =>
      `${name} ${surname}` === searchFullName ? born : null
    )
    .map(({ born }) => born);
}

console.table(findNameAndBitrthdayScientist(academic, "Albert Einstein"));

//task 7 Find all Surnames of scientist who start on litter "C";
function findSurnamesToLetter(academic) {
  return academic.filter(({ surname }) => surname[0] === "C");
}

console.table(findSurnamesToLetter(academic));

//task 8: delete scientists whose name begins with A
function deleteNamesToStartLetterA(academic) {
  return academic.filter(({ name }) => {
    if (name[0] === "A") {
      let idx = academic.indexOf(name);
      academic.splice(idx, 1);
    } else {
      return name;
    }
  });
}

console.table(deleteNamesToStartLetterA(academic));

// task 8: find the yongest and older academic in arr
function returnMaxAgesScintistAndLessAges(academic) {
  return academic
    .map(({ name, surname, born, dead }) => {
      return { name, surname, age: dead - born };
    })
    .sort((a, b) => compare(b, a, "age"))
    .reduce((academicArr, scientist, idx) => {
      if (idx === 0 || idx === academic.length - 1) {
        academicArr.push(scientist);
      }
      return academicArr;
    }, [])
    .reverse();

  //second version where i doesn't add reduce()
  // let sortedArr = academic
  // .map(({ name, surname, born, dead }) => {
  //   // let age = dead - born;
  //   return { name, surname, age: dead - born };
  // })
  // .sort((a, b) => compare(b, a, "age"))

  // return [sortedArr[0], sortedArr[sortedArr.length - 1]];
}

console.table(returnMaxAgesScintistAndLessAges(academic));

//task 9: find the scientist where first letter of name and surname is equal

function findScientistWithFistLetterNameSurname(academic) {
  return academic.filter(({ name, surname }) => name[0] === surname[0]);
}

console.table(findScientistWithFistLetterNameSurname(academic));

//task 10: Return the value of whether all employees worked in the 19th century
function returnBoolScientistWhoWorkIn19Centuary(academic) {
  return academic.every(({ born }) => born > 1800);
}

console.log(returnBoolScientistWhoWorkIn19Centuary(academic));

//universal sorting
function compare(a, b, param) {
  if (a[param] < b[param]) {
    return -1;
  }
  if (a[param] > b[param]) {
    return 1;
  }
  return 0;
}

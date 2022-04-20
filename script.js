/*
Odzwierciedlenie głównych iteratorów
    forEach
    map - easy
    filter - medium
    find  - easy
    includes - medium
    some - easy
    every- medium
    reduce - hard
*/

const animals = ["lion", "zebra", "ant", "horse"];
const numbers = [48, 4, 6, 2, 12, 0, 8, 2];

console.log("ForEach:");
// const foeEachFunction = animals.forEach((el) => el);
const forEachFunction = (arr, callback) => {
  for (const el of arr) console.log(callback(el));
};

forEachFunction(numbers, (el) => el > 2);

console.log("Map:");
const mapFunction = (arr, callback) => {
  let mapArray = [];
  for (const el of arr) mapArray.push(callback(el));
  return mapArray;
};

console.log(mapFunction(animals, (el) => el.length > 3));

console.log("Filter:");
const filterFunction = (arr, callback) => {
  let filterArray = [];
  for (const el of arr) {
    if (callback(el)) {
      filterArray.push(el);
    }
  }
  return filterArray;
};

console.log(filterFunction(numbers, (el) => el === 2));

console.log("Find:");
// const found = numbers.find((el) => el === 2);
// console.log(found);

const findFunction = (arr, callback) => {
  for (const el of arr) {
    if (callback(el)) {
      return el;
    }
  }
};

console.log(findFunction(numbers, (el) => el >= 2));

console.log("Includes:");
// console.log(animals.includes("zebra"));
const includesFunction = (arr, search) => {
  let isIncluded = false;
  for (const el of arr) {
    if (el === search) {
      isIncluded = true;
      break;
    }
  }
  return isIncluded;
};

console.log(includesFunction(animals, "zebra"));

console.log("Some:");
// console.log(numbers.some((el) =>el > 5));
const someFucntion = (arr, callback) => {
  let isMached = false;
  for (const el of arr) {
    if (callback(el)) {
      isMached = true;
      break;
    }
  }
  return isMached;
};

console.log(someFucntion(numbers, (el) => el > 5));

console.log("Every:");
// console.log(numbers.every((el) => el));
const everyFunction = (arr, callback) => {
  let isMached = true;
  for (const el of arr) {
    if (callback(el)) {
      isMached = true;
    } else {
      isMached = false;
      break;
    }
  }
  return isMached;
};

console.log(everyFunction(numbers, (el) => el % 2 == 0));

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

const animals= ["lion", "zebra", "ant", "horse"];
const numbers = [1, 4, 6, 2, 12, 0, 5, 2];

console.log("ForEach:");
const forEachFunction = (arr) =>{
    for(const ar of arr) console.log(ar);
};

forEachFunction(numbers);

// const foeEachFunction = animals.forEach((el) => el);
// console.log(foeEachFunction);   //(zwraca undefind)


console.log("Map:");
//const mapFunction = animals.map((el) => el); //(zwraca nową tablicę)
// console.log(mapFunction);

let mapArray = [];
const mapFunction = (arr) => {
    for(const ar of arr) mapArray.push(ar);
};
mapFunction(animals);
console.log(mapArray);



console.log("Filter:");
// const essa = numbers.filter((el) => el==2 && el);
// console.log(essa);

let filterArray = [];
const filterFunction = (arr, el) =>{
    for(const ar of arr){
        if(ar === el) filterArray.push(el);
    }
}

console.log(filterFunction(numbers, 2));



console.log("Find:");
// const found = numbers.find((el) => el === 2);
// console.log(found);

const findFunction = (arr, el) =>{
    for(const ar of arr){
        if(ar === el){
            return ar;
        }
    };
};

console.log(findFunction(numbers, 2));


console.log("Includes:");
// console.log(animals.includes("zebra"));
const includesFunction = (arr, el) =>{
    let isIncluded = true;
    for(const ar of arr) {
        if(el === ar){
            isIncluded = true;
            break;
        }
        else isIncluded = false;
    }
    return isIncluded
}

console.log(includesFunction(animals, "zebra"));


console.log("Some:");
// console.log(numbers.some((el) =>el > 5));
const someFucntion = (arr, el) =>{
    let isMached = false;
    for(const ar of arr){
        if(ar > el){
            isMached = true;
            break;
        }
    }
    return isMached;
}

console.log(someFucntion(numbers, 5));
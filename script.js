const items = [
    {  name: 'Bike',        price: 100  },
    {  name: 'TV',          price: 200  },
    {  name: 'Album',       price: 10   },
    {  name: 'Book',        price: 5    },
    {  name: 'Phone',       price: 500  },
    {  name: 'Computer',    price: 1000 },
    {  name: 'Keyboard',    price: 25   }
];

const nums = [1, 2, 3, 4, 5];

// .Filter method
// takes a single function that has one parameter ('item')
// returns a new array with only objects that pass given condition

const filteredItems = items.filter((item) => {  
    return item.price <= 100;
});


// .Map method
// takes a single function that has one parameter ('item')
// returns a new array with only the specified property of the object
const itemNames = items.map((item) => {
    return item.name
})

// .Find method
// takes a single function that has one parameter ('item')
// returns *very first* item in array that meets condition 

const findItem = items.find((item) => {
    return item.name === "Bike"
})

// .ForEach method
// Alternative to a For-Loop
items.forEach(item => { console.log(item) });


// .Some method
// checks to see if any of the items in array meet condition
// * returns true or false *
const hasCheapStuff = items.some((item) => {
    return item.price <= 100
})


// .Every method
// checks to see if ALL of the items in array meet condition, returns true or false
const everythingIsCheap = items.every((item) => {
    return item.price <= 100;
});


// .Reduce method
// runs function on every item of array
// 'currentTotal' will be whatever the previous iteration of the array returned
// 0 after the comma is defined as the starting point of currentTotal
// the second method
const total = items.reduce((currentTotal, item) => {
return item.price + currentTotal;
}, 0);

// .Includes method
// checks to see if the array includes a given value
// * returns true or false *
const IncludesTwo = nums.includes(2);



function IsPalindrome(str) {
    var length = str.length / 2;

    for (let i = 0; i < length; i++){
      if (str[i] !== str[str.length - i - 1]){
          return false;
        }
    }
    return true;
  }

  let word = "Racecar"
  let desc;
  let results = IsPalindrome(word.toLowerCase);
  
  if (results == true){
      desc = "is a pallindrome!"
  } else {
      desc = "is not a pallindrome... :/"
  }



console.log(items);
console.log(filteredItems);
console.log(itemNames);
console.log(findItem);
console.log(hasCheapStuff);
console.log(everythingIsCheap);
console.log(`$${total} and it's all yours!`);
console.log(IncludesTwo);
console.log(`It's ${results}! "${word}" ${desc}`)


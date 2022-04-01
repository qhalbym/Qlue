// SHELL
// 1. sudo systemctl status apache2
// 2. sed -i 's/Mango/Apple/' mig33/inner.folder/1.txt

//SQL
// 1. select persons."name", sum(transactions.total * cast(items.price AS integer)) as total_price  from transactions join items on transactions.item_id = items.id join persons on transactions.person_id = persons.id group by persons."name"

// 2. select transactions.*, persons."name" as person_name, items."name" as item_name from transactions join items on transactions.item_id = items.id join persons on transactions.person_id = persons.id where transactions."date" >= '2020-01-01' and transactions."date" <= '2020-01-25'

// 3. select persons."name" from transactions join items on transactions.item_id = items.id join persons on transactions.person_id = persons.id group by persons."name" order by count(transactions.*) DESC

//NodeJS
function getShape(num) {
  if (num % 2 == 0 && num % 3 == 0) {
    return "CIRCLE STAR";
  } else if (num % 2 == 0) {
    return "CIRCLE";
  } else if (num % 3 == 0) {
    return "STAR";
  } else {
    return null;
  }
}

console.log(getShape(5));
console.log(getShape(6));
console.log(getShape(9));

//Javascript
let JSON = [
  { username: "ali", hair_color: "brown", height: 1.2 },
  { username: "marc", hair_color: "blue", height: 1.4 },
  { username: "joe", hair_color: "brown", height: 1.7 },
  { username: "zehua", hair_color: "black", height: 1.8 },
];

function getJSONStandard(array) {
  let result = {
    h: [],
    d: [],
  };
  for (let i = 0; i < array.length; i++) {
    headerLenght = Object.entries(array[i]).length;
    Object.entries(array[i]).forEach((e, j) => {
      if (result.h.length < headerLenght) {
        result.h.push(e[0]);
      }
      result.d.push(e[1]);
    });
  }
  console.log(result);
}

getJSONStandard(JSON);

function showNumbers(arr) {
  let print = [];
  if (arr.length != 1) {
    for (let i = 0; i < arr.length; i++) {
      print.push(arr[i]);
      if (print.length === 0) {
        break;
      }
    }
    console.log(print);
  }
}

function findNumHelper(arr, i, n) {
  if (n == 0) {
    showNumbers(arr);
  }
  for (let j = i; j <= n; j++) {
    arr.push(j);
    findNumHelper(arr, j, n - j);
    arr.pop();
  }
}

function findNumberSet(n) {
  const arr = [];
  findNumHelper(arr, 1, n);
}

let n = 4;
findNumberSet(4);

//Parallel and Concurency

/**
 * The main different is when for example 2 task have to run together, with concurency it is like when you are riding a bike then your phone is ringing, you stop the bike and answer the call and after call end you continue your trip with your bike. In the other hand we can call it Parallel if you answer the call without even have to stop your bike, which mean you answer the call while you are still riding the bike to your destination
 */

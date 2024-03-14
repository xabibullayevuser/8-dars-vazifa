//1-masala

// function isEmpty(obj) {
//     let keys = Object.keys(obj);
//     return keys.length === 0;
// }
// let emptyObject = {};
// let objectWithProperties = { name: "John", age: 30 };

//console.log(isEmpty(emptyObject)); // true
//console.log(isEmpty(objectWithProperties)); // false

//2-masala

// function getTotalIncome(salaries) {
//     const { ...rest } = salaries;  
//     const totalIncome = Object.values(rest).reduce((acc, value) => acc + value, 0);
//     return totalIncome;
//   }
  
//   const salaries = { John: 100, Ann: 160, Pete: 130 };
//   const total = getTotalIncome(salaries);
  
//  console.log("Umumiy hisob:", total); //console: Umumiy hisob: 390;


//3-masala

// function multiplyNumeric(obj) {
//     let newObj = {};
//     for (const [key, value] of Object.entries(obj)) {
//       if (typeof value === 'number') {
//         newObj[key] = value * 2;
//       } else {
//         newObj[key] = value;
//       }
//     }
//     return newObj;
//   }
  
//   let menu = { width: 400, height: 600, title: "My menu" };
//   let multiplyMenu = multiplyNumeric(menu);
  
//   console.log(menu); 
//   console.log(multiplyMenu);

// 4-masala
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr); // console: [8, 5, 2, 1, -10]

//5-masala ?????????????????????????????????????????????????
  
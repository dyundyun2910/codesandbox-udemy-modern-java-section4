// const func1 = function(str) {return str;}
// console.log("func1");

// const func2 = (str) => { return str;}
// console.log("func2")

// const myProfile = {
//   name: "takaki",
//   age: 39,
// }
// console.log(myProfile);

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// const sayHello = (name = "髙木") => {console.log(`こんにちは${name}さん`);};
// sayHello();

// const arr1 = [1, 2, 3];
// console.log(arr1);
// console.log(...arr1);

// const someFunc = (num1, num2) => console.log(num1 + num2);
// someFunc(arr1[0], arr1[1]);
// someFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);  

// const nameArr = ["山田", "田中", "takagi"];
// for (let i = 0; i < nameArr.length; i++) {
//     console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map((name) => {return name;});
// console.log(nameArr2);

// nameArr.map((name) => {console.log(name)});

// const numArr = [1, 2, 3, 4, 5];
// numArr2 = numArr.filter((num) => {return num % 2 === 1});
// console.log(numArr2);

const flag1 = false;
flag1 || console.log("実行");
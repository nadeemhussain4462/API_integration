// console.log("hello");

// for (var i = 0; i < 5; i++) {
//   console.log(i + ' ' + "Hello");
// }

// console.log("hello1");

// setTimeout(function () {
//   console.log("hello after 3 seconds");
// }, 3000);

// setTimeout(function () {
//   console.log("hello after 2 seconds");
// }, 2000);

// setTimeout(function(){
//     console.log("setTime out Function after 2 seconds")
// }, 2000);

console.log("hello");
var obj;

function foo(callback) {
    // console.log("asif");
  setTimeout(function () {
    var obj = {
      name: "ali",
      email: "ali@gmail.com",
    };
    callback(obj)
  }, 3000);
}

function abc(data) {
  console.log(data);
}
foo(abc)

// setTimeout(function(){
//     console.log(obj);
// },4000)

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (data) {
//     console.log("data-->",data);
//   })
//   .catch(function (err) {
//     console.log("err-->",err);
//   });

// // callback example:
// function abc(){
//     setTimeout(function(){
//         var xyz = "hello"
//     })
// }

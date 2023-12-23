// function x(){
//     var a =66;
//    return function y(){
//         console.log(a);
//     }
// }
// var z = x();

// z();

// const array = [1, 2, 3];
// let num = 1;
// num += 1;
// num -= 1;

// const sum = array.reduce((a, b) => a + b, 0);
// const truthyCount = array.filter(Boolean).length;

// function example() {
//     console.log(anonymous); // => undefined

//     anonymous(); // => TypeError anonymous is not a function

//     var anonymous = function () {
//       console.log('anonymous function expression');
//     };
//   }


function x() {

    
 

 for( var i=1; i<=5;i++){
    function close(newi){
        setTimeout(function () {
            console.log(newi);
          }, 1000 * newi);
    }
    close(i);
 }

 
}

x();

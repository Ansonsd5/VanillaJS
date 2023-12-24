//Function statements


function a(){
    console.log("This is a function statement");
}

//Function Expression;

var func = function (){
    console.log("This is a function expression");
}

// The main difference between this two types of functions are hoisting when called before function declaration func() will through TypeError: func is not a function;

//Anonymous function : function without identifier or name, 

// function(){  //syntax error 
//     console.log('this is anonymous function');
// }

//First Class funtions or First class Citizens 
//The ablity of functions that can be used to pass like a value is called FCF or FCC;


const arrowFunction = () =>{
    console.log("This is a Arrow function")
}

// No function key word function key words can be passed inside () like (arg1,arg2,....)

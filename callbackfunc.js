setTimeout(function () {
  console.log("Settimeout Expries after 5000ms");
}, 5000);

function x(y) { //funtion y is passed as a argument to funtion x;
  console.log("x");
  y(); // funtion y is called
}

x(function y() { //funtion y declared as a parameter for function x;
  console.log("y");
});



function attachEventListener(){
    let count = 0;
    document
      .getElementById("clickMe")
      .addEventListener("click", function handleClick() {
        console.log("Button Clicked",++count);
      });
}


attachEventListener();



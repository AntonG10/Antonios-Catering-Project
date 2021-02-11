
function myFunction() {
  var x = document.getElementById("myTopnav");
  var b = document.getElementById("sec-col");
   
  if (x.className === "nav") {
       x.className += " responsive";
  } else {
    x.className = "nav";
    
  }

  if (b.className === "col-top") {
    b.className += " responsiveA";
  } else {
    b.className = "col-top";
  }
    
}


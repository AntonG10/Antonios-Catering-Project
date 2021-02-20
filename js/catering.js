
// Hamburger toggle control
function myFunction() {
  var x = document.getElementById("myTopnav");
  var b = document.getElementById("sec-col");
  var c = document.getElementById("waiter");
   
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

   if (c.className === "waiter") {
    c.className += " responsiveB";
  } else {
    c.className = "waiter";
  }
    
}

// Food Item Multidimensional Array
const foodlist = [
  ['Bread Basket','Assortment of fresh baked fruit breads and muffins', '5.50'],
  ['Honey Almond Granola with Fruits','Natural cereal of honey toasted oats, raisins, almonds and dates', '7.00'],
  ['Belgian Waffle','Vanilla flavored batter with malted flour', '7.50'],
  ['Scrambled eggs','Scrambled eggs,roasted red pepper, garlic, with green onions', '7.50'],
  ['Blueberry Pancakes','With syrup, butter and lots of berries', '8.50']
];

function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<h4>${ arr[i][0] }</h4> <p class="text-grey">${ arr[i][1] } <strong>${ arr[i][2] }</strong></p>`;
  }
  return items;
}

document.querySelector('main').innerHTML = `

    ${createListItems(foodlist)}
 
`;



// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}





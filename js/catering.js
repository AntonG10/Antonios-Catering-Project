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

// Create arrays to hold food category and items
const foodlist = [
  ['Bread Basket', 'Assortment of fresh baked fruit breads and muffins', '5.50'],
  ['Honey Almond Granola with Fruits', 'Natural cereal of honey toasted oats, raisins, almonds and dates', '7.00'],
  ['Belgian Waffle', 'Vanilla flavored batter with malted flour', '7.50'],
  ['Scrambled eggs', 'Scrambled eggs,roasted red pepper, garlic, with green onions', '7.50'],
  ['Blueberry Pancakes', 'With syrup, butter and lots of berries', '8.50']
];

// Function to iterate through the array and create html for the food items
function createListItems(arr) {
  let items = '';
  
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i][2] === '5.50') {
      let newPrice = 5.5 - (5.5 * 0.1);
      items += `<h4>${ arr[i][0] }</h4> <p class="text-grey">${ arr[i][1] } <strong><del>${ arr[i][2] }</del></strong> <strong>${newPrice}</strong></p>`;
    } else {
        items += `<h4>${ arr[i][0] }</h4> <p class="text-grey">${ arr[i][1] } <strong>${ arr[i][2] }</strong></p>`;
    }
  }
  return items;
}

// Insert foodlist into the main element in the menu section content in index.html file
document.querySelector('main').innerHTML = `${createListItems(foodlist)}`;


// JavaScript for store offer 
// Declare variables
var weekFromToday, day, date, month, year, monthNames, dayNames;
var storeoffer = '';
var d = new Date();

// Create arrays to hold the names of months / days
 monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add 7 days time (added in milliseconds) for the store offer: 
// minutes = 60 * 1000
// hours = minutes * 60
// days = hours * 24
// weekFromToday = using getTime() producses store offer period 7 days time (added in milliseconds)
    weekFromToday = new Date(d.getTime() + 7 * 24 * 60 * 60 * 1000);

// Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
   
// Create the message with the parts of the date to show on the page using template literal
storeoffer =
  `<h4 class="padding-16-all">10% Off Bread Basket Items - Offer Expires Next:</h4>
  <p class= "text-blue ">(${day} ${month}, ${date} - ${year})</p>`;
 
//The insertAdjacentHTML() method inserts the above text as HTML, into a specified position that being 'beforeend' - Before the end of the element (as the last child). This inserts the storeoffer text as the last child of the createListItems(foodlist) array 

document.querySelector('main').insertAdjacentHTML('beforeend', storeoffer);

 
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
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}
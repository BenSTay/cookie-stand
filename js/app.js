'use strict';

//Function to calculate the total sales at all stores for a given hour.
var hourSum = function(objArray,pos) {
  var sum = 0;
  for (var i of objArray) {
    sum += i.cookiesSold[pos][1];
  }
  return sum;
};

//Function to render the header to the website.
var renderHead = function(obj) {
  var table = document.getElementById('salestable');

  var head = document.createElement('tr');
  table.appendChild(head);

  var newElement = document.createElement('th');
  head.appendChild(newElement);

  for (var i of obj.cookiesSold) {
    newElement = document.createElement('th');
    newElement.textContent = i[0];
    head.appendChild(newElement);
  }
};

//Function to render one row of the body of the website.
var renderBody = function(obj) {
  var table = document.getElementById('salestable');
  var row = document.createElement('tr');
  table.appendChild(row);

  var head = document.createElement('th');
  head.textContent = obj.name;
  row.appendChild(head);

  var newElement;
  for (var i of obj.cookiesSold) {
    newElement = document.createElement('td');
    newElement.textContent = i[1];
    row.appendChild(newElement);
  }
};

//Function to render the footer of the body of the website.
var renderFoot = function(objArray) {
  var table = document.getElementById('salestable');
  var row = document.createElement('tr');
  table.appendChild(row);

  var head = document.createElement('th');
  head.textContent = 'Total';
  row.appendChild(head);

  var newElement;
  for (var i = 0; i < objArray[0].cookiesSold.length; i++) {
    newElement = document.createElement('td');
    newElement.textContent = hourSum(objArray,i);
    row.appendChild(newElement);
  }
};

//Constructor for CookieStore objects.
function CookieStore(name, minCustomers, maxCustomers, averageCookies, openHour, closeHour) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.openHour = openHour;
  this.closeHour = closeHour;
  this.cookiesSold = [];
}

//Populates the cookiesSold array with times and sales figures.
CookieStore.prototype.simulateSales = function() {
  var hourNum, amPM, cookiesPerHour;
  var totalSales = 0;

  for (var i = this.openHour; i <= this.closeHour; i++) {
    hourNum = i;
    amPM = 'am';

    if (i >= 12) {
      amPM = 'pm';

      if (i > 12){
        hourNum -= 12;
      }
    }

    cookiesPerHour = Math.round(this.averageCookies * Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    totalSales += cookiesPerHour;
    this.cookiesSold.push([hourNum + amPM, cookiesPerHour]);
  }
  this.cookiesSold.push(['Total',totalSales]);
};

//Creates five CookieStore instances.
var firstAndPike = new CookieStore('First & Pike', 23, 65, 6.3, 6, 20);
var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2, 6, 20);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7, 6, 20);
var capitolHill = new CookieStore('Capitol Hill', 20, 30, 2.3, 6, 20);
var alki = new CookieStore('Alki', 2, 16, 4.6, 6, 20);


//Stores all of the CookieStores in an array.
var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

//Simulates for each CookieStore in the stores array.
for (var i of stores) {
  i.simulateSales();
}

//Renders the head of the table.
renderHead(alki);

//Renders the body of the table.
for (i of stores) {
  renderBody(i);
}

//Renders the foot of the table.
renderFoot(stores);
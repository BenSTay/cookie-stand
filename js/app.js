'use strict';

//Stores all of the CookieStores in an array.
var stores = [];

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
  stores.push(this);
  this.simulateSales();
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
new CookieStore('First & Pike', 23, 65, 6.3, 6, 20);
new CookieStore('SeaTac Airport', 3, 24, 1.2, 6, 20);
new CookieStore('Seattle Center', 11, 38, 3.7, 6, 20);
new CookieStore('Capitol Hill', 20, 30, 2.3, 6, 20);
new CookieStore('Alki', 2, 16, 4.6, 6, 20);

//Renders the head of the table.
renderHead(stores[0]);

//Renders the body of the table.
for (var i of stores) {
  renderBody(i);
}

//Renders the foot of the table.
renderFoot(stores);
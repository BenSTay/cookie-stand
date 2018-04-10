'use strict';

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
    amPM = "am";

    if (i >= 12) {
      amPM = "pm";

      if (i > 12){
        hourNum -= 12;
      }
    }

    cookiesPerHour = Math.round(this.averageCookies * Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    totalSales += cookiesPerHour;
    this.cookiesSold.push([hourNum + amPM, cookiesPerHour]);
  }
  this.cookiesSold.push(['Total',totalSales]);
}

//Renders the sales figures to the webpage.
CookieStore.prototype.renderSales = function() {
  var box = document.createElement('span');
  box.className = 'salesbox';
  document.body.appendChild(box);

  var heading = document.createElement('h2');
  heading.textContent = this.name;
  box.appendChild(heading);

  var list = document.createElement('ul');
  box.appendChild(list);

  for(var i of this.cookiesSold) {
    var item = document.createElement('li')
    item.textContent = i[0] + ': ' + i[1] + ' cookies'
    list.appendChild(item);
  }
}

//Stores all of the CookieStores in an array
var stores = [
  new CookieStore('First & Pike', 23, 65, 6.3, 6, 20),
  new CookieStore('SeaTac Airport', 3, 24, 1.2, 6, 20),
  new CookieStore('Seattle Center', 11, 38, 3.7, 6, 20),
  new CookieStore('Capitol Hill', 20, 30, 2.3, 6, 20),
  new CookieStore('Alki', 2, 16, 4.6, 6, 20)
];

//Simulates and renders the sales for each CookieStore in the stores array.
for (var i of stores) {
  i.simulateSales();
  i.renderSales();
}
'use strict';

//Stores all of the CookieStores in an array.
var stores = [];

//An array of times, used to render the header and calculate the length of the cookiesSold array.
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm',
  '2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//Stores a reference to the salestable in a variable.
var salesTable = document.getElementById('salestable');

//Function to add a store to the stores array and update the table.
function addNewStore(e){
  e.preventDefault();

  var name = e.target.name.value;
  var minCustomers = parseInt(e.target.minCustomers.value);
  var maxCustomers = parseInt(e.target.maxCustomers.value);
  var averageCookies = parseFloat(e.target.averageCookies.value);

  if(minCustomers > maxCustomers){
    alert('Error: Minimum customers cannot be greater than the Maximum customers!');
    return;
  }

  var newStore = new CookieStore(name, minCustomers, maxCustomers, averageCookies);

  salesTable.removeChild(document.getElementById('foot'));
  newStore.renderRow(document.getElementById('body'));
  renderFoot(stores);

  e.target.reset();
}

//Function to calculate the total sales at all stores for a given hour.
var hourSum = function(storeArray) {
  var sumArray = [];

  for (var i = 0; i <= hours.length; i++){
    sumArray.push(0);
  }

  for (i of storeArray) {

    for (var j = 0; j < hours.length; j++){
      sumArray[j] += i.cookiesSold[j];
    }
    sumArray[hours.length] += i.totalSales;
  }
  return sumArray;
};

//Function that returns a new element with text content attached.
function newEl(tag, content) {
  var el = document.createElement(tag);
  el.textContent = content;
  return el;
}

//Function to render the entire table, only used upon load.
function renderTable(storeArray) {
  renderHead();
  renderBody(storeArray);
  renderFoot(storeArray);
}

//Function to render the header of the table.
function renderHead() {
  var tableHead = document.createElement('thead');
  tableHead.appendChild(newEl('th',''));

  for (var i of hours) {
    tableHead.appendChild(newEl('th',i));
  }

  tableHead.appendChild(newEl('th','Total'));
  salesTable.appendChild(tableHead);
}

//Function to render the body of the table.
function renderBody(storeArray) {
  var tableBody = document.createElement('tbody');
  tableBody.id = 'body';

  for (var i of storeArray){
    i.renderRow(tableBody);
  }

  salesTable.appendChild(tableBody);
}

//Function to render the footer of the table.
function renderFoot(storeArray) {
  var tableFoot = document.createElement('tfoot');
  tableFoot.id = 'foot';
  tableFoot.appendChild(newEl('th','Total'));

  for (var i of hourSum(storeArray)) {
    tableFoot.appendChild(newEl('td',i));
  }

  salesTable.appendChild(tableFoot);
}

//Constructor for CookieStore objects.
function CookieStore(name, minCustomers, maxCustomers, averageCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.cookiesSold = [];
  this.totalSales = 0;

  stores.push(this);
  this.simulateSales();
}

//Function to populate the cookiesSold array.
CookieStore.prototype.simulateSales = function() {
  var cookiesPerHour, randomNum;

  for (var i = 0; i < hours.length; i++) {
    randomNum = Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    cookiesPerHour = Math.round(randomNum * this.averageCookies);
    this.totalSales += cookiesPerHour;
    this.cookiesSold.push(cookiesPerHour);
  }
};

//Function to add a new row to the salestable.
CookieStore.prototype.renderRow = function(tableBody) {
  var tableRow = document.createElement('tr');
  tableRow.appendChild(newEl('th',this.name));

  for (var i of this.cookiesSold) {
    tableRow.appendChild(newEl('td',i));
  }

  tableRow.appendChild(newEl('td',this.totalSales));
  tableBody.appendChild(tableRow);
};

//Creates five CookieStore instances.
new CookieStore('First & Pike', 23, 65, 6.3);
new CookieStore('SeaTac Airport', 3, 24, 1.2);
new CookieStore('Seattle Center', 11, 38, 3.7);
new CookieStore('Capitol Hill', 20, 30, 2.3);
new CookieStore('Alki', 2, 16, 4.6, 6, 20);

renderTable(stores);

//Creates a new event listener.
var newStoreForm = document.getElementById('new-store-form');
newStoreForm.addEventListener('submit', addNewStore);
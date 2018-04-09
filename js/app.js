'use strict';

var firstAndPike = {
  name: 'First & Pike',
  minCustomers: 23,
  maxCustomers: 65,
  averageCookies: 6.3,
  openHour: 6,
  closeHour: 20,
  cookiesSold: [],

  simulateSales: function(){
    var box = document.createElement('span');
    box.className += 'salesbox';
    document.body.appendChild(box);

    var heading = document.createElement('h2');
    heading.textContent = this.name;
    box.appendChild(heading);

    var list = document.createElement('ul');
    box.appendChild(list);

    var hourNumber;
    var amPM;
    var randomNum;
    for (var i = this.openHour; i <= this.closeHour; i++) {
      var item = document.createElement('li');
      if (i < 12) {
        amPM = 'am: ';
      } else {
        amPM = 'am: ';
      }
      if (i > 12) {
        hourNumber = i - 12;
      } else {
        hourNumber = i;
      }
      randomNum = Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);

      this.cookiesSold.push(randomNum);

      item.textContent = hourNumber + amPM + randomNum + ' cookies';
      list.appendChild(item);
    }
    var totalNum = 0;
    var total = document.createElement('li');
    for (i of this.cookiesSold){
      totalNum += i;
    }
    total.textContent = 'Total: ' + totalNum + ' cookies';
    list.appendChild(total);
  }
};

var seaTacAirport = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  averageCookies: 1.2,
  openHour: 6,
  closeHour: 20,
  cookiesSold: [],

  simulateSales: function(){
    var box = document.createElement('span');
    box.className += 'salesbox';
    document.body.appendChild(box);

    var heading = document.createElement('h2');
    heading.textContent = this.name;
    box.appendChild(heading);

    var list = document.createElement('ul');
    box.appendChild(list);

    var hourNumber;
    var amPM;
    var randomNum;
    for (var i = this.openHour; i <= this.closeHour; i++) {
      var item = document.createElement('li');
      if (i < 12) {
        amPM = 'am: ';
      } else {
        amPM = 'am: ';
      }
      if (i > 12) {
        hourNumber = i - 12;
      } else {
        hourNumber = i;
      }
      randomNum = Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);

      this.cookiesSold.push(randomNum);

      item.textContent = hourNumber + amPM + randomNum + ' cookies';
      list.appendChild(item);
    }
    var totalNum = 0;
    var total = document.createElement('li');
    for (i of this.cookiesSold){
      totalNum += i;
    }
    total.textContent = 'Total: ' + totalNum + ' cookies';
    list.appendChild(total);
  }
};

var seattleCenter = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  averageCookies: 3.7,
  openHour: 6,
  closeHour: 20,
  cookiesSold: [],

  simulateSales: function(){
    var box = document.createElement('span');
    box.className += 'salesbox';
    document.body.appendChild(box);

    var heading = document.createElement('h2');
    heading.textContent = this.name;
    box.appendChild(heading);

    var list = document.createElement('ul');
    box.appendChild(list);

    var hourNumber;
    var amPM;
    var randomNum;
    for (var i = this.openHour; i <= this.closeHour; i++) {
      var item = document.createElement('li');
      if (i < 12) {
        amPM = 'am: ';
      } else {
        amPM = 'am: ';
      }
      if (i > 12) {
        hourNumber = i - 12;
      } else {
        hourNumber = i;
      }
      randomNum = Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);

      this.cookiesSold.push(randomNum);

      item.textContent = hourNumber + amPM + randomNum + ' cookies';
      list.appendChild(item);
    }
    var totalNum = 0;
    var total = document.createElement('li');
    for (i of this.cookiesSold){
      totalNum += i;
    }
    total.textContent = 'Total: ' + totalNum + ' cookies';
    list.appendChild(total);
  }
};

var capitolHill = {
  name: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  averageCookies: 2.3,
  openHour: 6,
  closeHour: 20,
  cookiesSold: [],

  simulateSales: function(){
    var box = document.createElement('span');
    box.className += 'salesbox';
    document.body.appendChild(box);

    var heading = document.createElement('h2');
    heading.textContent = this.name;
    box.appendChild(heading);

    var list = document.createElement('ul');
    box.appendChild(list);

    var hourNumber;
    var amPM;
    var randomNum;
    for (var i = this.openHour; i <= this.closeHour; i++) {
      var item = document.createElement('li');
      if (i < 12) {
        amPM = 'am: ';
      } else {
        amPM = 'am: ';
      }
      if (i > 12) {
        hourNumber = i - 12;
      } else {
        hourNumber = i;
      }
      randomNum = Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);

      this.cookiesSold.push(randomNum);

      item.textContent = hourNumber + amPM + randomNum + ' cookies';
      list.appendChild(item);
    }
    var totalNum = 0;
    var total = document.createElement('li');
    for (i of this.cookiesSold){
      totalNum += i;
    }
    total.textContent = 'Total: ' + totalNum + ' cookies';
    list.appendChild(total);
  }
};

var alki = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  averageCookies: 4.6,
  openHour: 6,
  closeHour: 20,
  cookiesSold: [],

  simulateSales: function(){
    var box = document.createElement('span');
    box.className += 'salesbox';
    document.body.appendChild(box);

    var heading = document.createElement('h2');
    heading.textContent = this.name;
    box.appendChild(heading);

    var list = document.createElement('ul');
    box.appendChild(list);

    var hourNumber;
    var amPM;
    var randomNum;
    for (var i = this.openHour; i <= this.closeHour; i++) {
      var item = document.createElement('li');
      if (i < 12) {
        amPM = 'am: ';
      } else {
        amPM = 'am: ';
      }
      if (i > 12) {
        hourNumber = i - 12;
      } else {
        hourNumber = i;
      }
      randomNum = Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);

      this.cookiesSold.push(randomNum);

      item.textContent = hourNumber + amPM + randomNum + ' cookies';
      list.appendChild(item);
    }
    var totalNum = 0;
    var total = document.createElement('li');
    for (i of this.cookiesSold){
      totalNum += i;
    }
    total.textContent = 'Total: ' + totalNum + ' cookies';
    list.appendChild(total);
  }
};

firstAndPike.simulateSales();
seaTacAirport.simulateSales();
seattleCenter.simulateSales();
capitolHill.simulateSales();
alki.simulateSales();
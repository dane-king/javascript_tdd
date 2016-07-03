/* jslint node:true*/
'use strict';

var isUndefined=false;

/* jshint undef:true, unused:false*/
function multiply(a,b){
  isUndefined=(this===undefined);
  return a*b;
}


var calc = {
  num: 0,
  increment: function() {
    this.num += 1;
    return this.num;
  }
};

var myDog = Object.create({
  sayName: function() {
     return this.name;
  }
});

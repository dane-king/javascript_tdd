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
    console.log(this === calc); // => true
    this.num += 1;
    return this.num;
  }
};
var Foo=function(){
  this.defaultValue='default';
};
var myDog = Object.create({
  sayName: function() {
     console.log(this === myDog); // => true
     return this.name;
  }
});

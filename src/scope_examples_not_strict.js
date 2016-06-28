/* jshint undef:true, unused:false */
function sum(a,b){
  this.myNumber=20;
  return a+b;
}

var numbers = {
   numberA: 5,
   numberB: 10,
   sum: function() {
     function calculate() {
       // this is window or undefined in strict mode
       this.globalVar=true;
       return this.numberA + this.numberB;
     }
     return calculate();
   }
};

var ns_calc = {
  num: 0,
  increment: function() {
    this.num=this.num || 0;
    this.num += 1;
    return this.num;
  }
};
//if used without new, this == window
var Foo=function(){
  this.defaultValue='default';
  return this;
};

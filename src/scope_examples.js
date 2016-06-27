/* jshint undef:false, unused: false */

//Global scope are visible to all levels
//Declare a global variable here and assign a value
var globalVar=true;

//Function scope is only visible to a function
function fnScope(num){
  var functionVar=2;
  return functionVar + num;
}

//Function sets values on this object
function fnScopeThis(num){
  this.functionVar=2;
  this.functionVar += num;
}



function outer(){
  var outVar=5;
  var inner=function innerFn(){
    return outVar;
  };
  return inner();
}

function outerError(){
  var inner=function innerFn(){
    return outVar;
  };
  return inner();
}

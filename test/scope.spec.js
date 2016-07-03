describe('Scope', function() {
  'use strict';

  var global;

  beforeEach(function() {
    //clean up globalVar
    global = window;

    if(global.functionVar){delete global.functionVar;}

  });
  describe("Global", function () {
    it("should be able to set global this value", function () {
      /* globals sum */
      sum(2,3);
      expect(global.myNumber).toEqual(20);
    });

    it("should set global value when using this in an inner function non strict", function () {
      /* globals numbers */
      numbers.sum();
      expect(global.globalVar).toEqual(true);
    });

    it("should be undefined when using this in strict mode", function () {
      /* globals multiply */
      multiply(2,3);
      expect(global.isUndefined).toEqual(true);
    });
  });
  describe("Method", function () {
    it("should set object variable when using this", function () {
      /* globals calc*/
      calc.num=5;
      expect(calc.increment()).toEqual(6);
    });
    it("should use object context when inherited", function () {
      /*globals myDog*/
      myDog.name="Fido";
      expect(myDog.sayName()).toEqual('Fido');
    });

    it("should use global when method is seperated from object", function () {
      /* global ns_calc */
      ns_calc.num=1;
      function asycFn(fn){
        fn.call();
        expect(global.num).toEqual(1);
      }
      setTimeout(asycFn(ns_calc.increment), 0);

    });
  });
  describe("Constructor", function () {
    /*global Foo */
    it("should use object instance for this", function () {
      var foo=new Foo();
      expect(foo.defaultValue).toEqual('default');
    });

    it("should look ok if new is missing", function () {
      var foo=Foo();
      expect(foo.defaultValue).toEqual('default');
      expect(window.defaultValue).toEqual('default');
      expect(foo).toEqual(window);
    });

  });

});

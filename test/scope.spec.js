describe('Scope', function() {
  'use strict';

  var global;

  beforeEach(function() {
    //clean up globalVar
    global = window;

    if(global.functionVar){delete global.functionVar;}

  });
  describe('Global', function() {
    it('should have access to global variables', function() {
      expect(global.globalVar).toBeDefined();
    });
    it('should not have access through function to variables', function() {
      var assignFn = global.fnScope();
      expect(assignFn.functionVar).not.toBeDefined();
    });
    it('should set a global if this is called', function() {
      global.fnScopeThis(3);
      expect(global.functionVar).toBe(5);
    });

    it('should not be global if this is called within an object', function() {
      var obj = {};
      obj.fn = global.fnScopeThis;
      obj.fn(3);
      expect(global.functionVar).not.toBeDefined();
    });

    it('should be an object scope if this is called within an object', function() {
      var obj = {};
      obj.fn = global.fnScopeThis;
      obj.fn(3);
      expect(obj.functionVar).toBe(5);
    });

  });

  describe('Nested Functions', function() {
    // body...
    it('should be able to access outer scope', function() {
      var expectedOuterValue=outer();
      expect(expectedOuterValue).toBe(5);
    });

    it('should throw error when cannot access outer scope', function() {
      expect(function(){outerError()}).toThrowError(ReferenceError);
    });
  });
});

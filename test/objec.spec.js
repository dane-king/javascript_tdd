describe("Objects", function () {
  var one,two;

  it("should pass primitive by value", function () {
    one="One";
    two=one;
    one="Change";
    expect(one).toEqual("Change");
    expect(two).toEqual("One");
  });

  it("should pass objects by reference", function () {
    one={'name':'One'};
    two=one;
    one.name="Change";
    expect(one.name).toEqual("Change");
    expect(two.name).toEqual("Change");

  });

  it("should pass object reference by value", function () {
    one={name:'One'};
    two=one;
    one={name:'Change'};
    expect(one.name).toEqual("Change");
    expect(two.name).toEqual("One");
  });

  describe("Assign", function () {

    it("should copy object one to two", function () {
        one={name:'One'};
        two=Object.assign(one);
        expect(one).toEqual(two);
    });

    it("should create a new copy if first argument empty object`", function () {
      one={'name':'One'};
      two=Object.assign({},one);
      one.name="Change";
      expect(one.name).toEqual("Change");
      expect(two.name).toEqual("One");
    });

    it("should copy object and merge properties", function () {
        one={name:'One'};
        two={prop1:false};
        two=Object.assign({},one, two);
        expect(two).toEqual({ name: 'One', prop1: false });
    });
    it("should copy object and merge deep properties", function () {
        one={name:'One'};
        two={prop1:{prop2:'deep'}};
        two=Object.assign({},one, two);
        expect(two).toEqual({ name: 'One', prop1: {prop2:'deep'} });
    });


  });

  describe("Prototype", function () {
    it("should have an empty prototype if function", function () {
      one=function noop(){ return true;};
      expect(one.prototype).toBeDefined();
    });
    it("should not have a prototype if object", function () {
      one={name:'one'};
      expect(one.prototype).not.toBeDefined();
    });
    it("should have a Constructor equal to the function", function () {
      one=function noop(){ return true;};
      expect(one.prototype.constructor).toEqual(one);      
    });
  });
});

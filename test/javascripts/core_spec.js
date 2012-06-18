describe("Test for core.js", function() {
  // test for getRandomImageId
  it("should return a random number", function() {
    // test for multiple times to make sure it is correct
    for (var i = 0; i < 10; i++) {
      var num = getRandomImageId(1, 5);
      expect(num >= 1 && num <= 5).toBe(true);
    }
  });
  
  // test for getImagePath
  it("should return the path of the image", function() {
    expect(getImagePath(1)).toBe("/images/1.jpg");
  });
  
  // test for sortObjectOnKeys
  it("should sort object on keys", function() {
    var obj = {};
    obj['1'] = 'a';
    obj['4'] = 'b';
    obj['3'] = 'c';
    var expected = {};
    expected['1'] = 'a';
    expected['3'] = 'c';
    expected['4'] = 'b';
    expect(sortObjectOnKeys(obj)).toEqual(expected);
    obj = {};
    obj['1'] = 'a';
    obj['-4'] = 'b';
    obj['3'] = 'c';
    var expected = {};
    expected['-4'] = 'b';
    expected['1'] = 'a';
    expected['3'] = 'c';
    // uncomment the following statement to see the wrong message
    // expect(sortObjectOnKeys(obj)).toEqual("");
  });
  
  // test for allKeys
  it("should return all keys of the object", function() {
    var obj = {};
    obj.a = 1;
    obj.b = 2;
    obj.c = 3;
    expect(allKeys(obj)).toEqual(["a", "b", "c"]);
  });
  
  // test for diffArrays
  it("should return different elements of two arrays", function() {
    var arr1 = ["1", "2", "3"];
    var arr2 = ["1", "a", "b"];
    expect(diffArrays(arr1, arr2)).toEqual(["2", "3"]);
    arr1 = [];
    arr2 = ["1", "2"];
    expect(diffArrays(arr1, arr2)).toEqual([]);
    var arr1 = ["1"];
    var arr2 = [];
    expect(diffArrays(arr1, arr2)).toEqual(["1"]);
  });
});
describe("Test for core.js", function() {
  // test for getRandomImageId
  it("should return a random number", function() {
    // test for multiple times to make sure it is correct
    for (var i = 0; i < 100; i++) {
      var num = getRandomImageId(10,20);
      expect(num >= 10 && num < 20).toBe(true);
    }
  });
  
  // test for getImagePath
  it("should return the path of the image", function() {
    expect(getImagePath(1)).toBe("/images/1.jpg");
  });
  
  // test for sortObjectOnKeys
  it("should return sorted keys of object", function() {
    // test for normal cases
    var obj = {};
    obj['1'] = 'a';
    obj['4'] = 'b';
    obj['3'] = 'c';
    expect(getSortedKeysOfObject(obj)).toEqual(['4','3','1']);
    // test negative numbers
    obj = {};
    obj['1'] = 'a';
    obj['-4'] = 'b';
    obj['3'] = 'c';
    expect(getSortedKeysOfObject(obj)).toEqual(['3', '1', '-4']);
    // test object with 'n/a'
    obj = {};
    obj['n/a'] = 'a';
    obj['1'] = 'b';
    obj['-1'] = 'c';
    expect(getSortedKeysOfObject(obj)).toEqual(['1', '-1', 'n/a']);
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
    // is this function supposed to return [""]?
    expect(diffArrays(arr1, arr2)).toEqual([""]);
    var arr1 = ["1"];
    var arr2 = [];
    expect(diffArrays(arr1, arr2)).toEqual(["1"]);
  });
});
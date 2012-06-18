describe("Test for core.js", function() {
    it("should return the path of the image", function() {
	expect(getImagePath(1)).toBe("/images/1.jpg");
    });

    it("should return all keys of the object", function() {
	var obj = {};
	obj.a = 1;
	obj.b = 2;
	obj.c = 3;
	expect(allKeys(obj)).toEqual(["a", "b", "c"]);
    });

    it("should return different elements of two arrays", function() {
	var arr1 = ["1", "2", "3"];
	var arr2 = ["1", "a", "b"];
	expect(diffArrays(arr1, arr2)).toEqual(["2", "3"]);
	arr1 = [];
	arr2 = ["1", "2"];
	// is this function supposed to return [""]?
	expect(diffArrays(arr1, arr2)).toEqual([""]);
    });
});
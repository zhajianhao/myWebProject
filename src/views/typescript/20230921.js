var quanju = '1'; //全局
var test = /** @class */ (function () {
    function test() {
        this.age = 24; //实例
    }
    test.prototype.count = function () {
        var local = "局部";
    };
    test.sex = '男'; //静态
    return test;
}());
console.log(test.sex);

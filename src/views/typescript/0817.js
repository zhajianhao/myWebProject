var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.name = function () {
        console.log('1');
    };
    return Person;
}());
var obj = new Person();
obj.name();

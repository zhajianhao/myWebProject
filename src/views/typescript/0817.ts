class Person {
    name():void{
        console.log('1')
    }
}
var obj = new Person();
obj.name()


var a = 1   //  类型推断为number
//  a = '1'     报错
//  var b:string = a    报错
var b:string = <string> <any>a
let str = Symbol('str')
// console.log(str)
//结果  Symbol(str)

let obj = {
    'key1': 'value1'
}
//symbol做key时不能通过.str，.str代表'str'的字符串，使用中括号[str]
obj[str] = 'message'
// console.log(obj)         
// 结果 { [Symbol(str)]: 'message' }

// console.log(obj[str])
// message

// 获取对象所有的所有属性名，无法获取symbol属性
// let argList = Object.getOwnPropertyNames(obj)
// console.log(argList)
//[ 'key1' ]

let argList = Object.getOwnPropertySymbols(obj)
// console.log(argList)
//[ Symbol(str) ]
console.log(Symbol.for('for')==Symbol.for('for'))
//true
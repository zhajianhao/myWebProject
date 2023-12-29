//JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
//Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应

let map = new Map()
map.set('1','abc')
// console.log(map.get('1'))
//abc
map.set(['1'],'a')
// console.log(map.get(['1']));
//undefined     两个实例在内存中地址不一样，视为两个键
//简单类型的值（数字、字符串、布尔值），只要两个值严格相等，Map 将其视为一个键
//undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
map.set({'a':'b'},'aa')
// console.log(map.get({'a':'b'}));
//undefined

const a = {'a': 'b'}
map.set(a,'aa')
// console.log(map.get(a))
//aa

// Map 结构原生提供三个遍历器生成函数和一个遍历方法。
// Map.prototype.keys()：返回键名的遍历器。
// Map.prototype.values()：返回键值的遍历器。
// Map.prototype.entries()：返回所有成员的遍历器。
// Map.prototype.forEach()：遍历 Map 的所有成员。


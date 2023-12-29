//set成员的值都是唯一的，没有重复的值
let arr = [1,1,2,3,4,5,5]
//去重
// console.log([...new Set(arr)])
let set = new Set([1,2,2,3])
set.add(4)
// console.log(set)
//Set(4) { 1, 2, 3, 4 }


let set1 = new Set('aabbbcc')
// console.log(set1)
//Set(3) { 'a', 'b', 'c' }
//数组去重
let  = [...set1].join('')

//Array.from()将Set转化为数组
const items = new Set([1,2,3,4])
const array = Array.from(items)
// console.log(array)
//[ 1, 2, 3, 4 ]
//利用Array.from去重
Array.from(new Set(array))


//遍历Set
const set2 = new Set(['a','b','c'])
const keys = set2.keys()
const values = set2.values()
const entries = set2.entries()
// console.log(keys);
//[Set Iterator] { 'a', 'b', 'c' }
// console.log(keys);
//[Set Iterator] { 'a', 'b', 'c' }
// console.log(entries);
//[Set Entries] { [ 'a', 'a' ], [ 'b', 'b' ], [ 'c', 'c' ] }
for(let x of set2){
    // console.log(x);
}
//a
//b
//c
set2.forEach((key,val)=>{
    // console.log(key+':'+val);
})
// a:a
// b:b
// c:c


//遍历的应用
//并集
let arr1 = new Set([1,2,3])
let arr2 = new Set([2,3,4])
let union = [...new Set([...arr1,...arr2])]
// console.log(union);
//[ 1, 2, 3, 4 ]
//交集
let Intersect = new Set([...arr1].filter(x=> arr2.has(x)))
// console.log(Intersect);
//Set(2) { 2, 3 }
//差集
let Difference = new Set([...arr1].filter(x => !arr2.has(x)))
// console.log(Difference);
// Set {1}
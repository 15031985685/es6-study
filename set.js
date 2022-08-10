/**
 * Set 对象
 * Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用
 */
let arry=['zhangsan','lisi','wangwu','zhaoliu',1,0,'1',1]
// 数组转set
let myset = new Set(arry)
console.log(myset)

//转为数组
let myArray = [...myset]
console.log(myArray)

// 1.add() 添加元素
console.log(myset)  // Set(7) { 'zhangsan', 'lisi', 'wangwu', 'zhaoliu', 1, 0, '1' }
myset.add(3)
console.log(myset)  // Set(8) { 'zhangsan', 'lisi', 'wangwu', 'zhaoliu', 1, 0, '1', 3 }
myset.add(1)  // 唯一性
console.log(myset)  //Set(8) { 'zhangsan', 'lisi', 'wangwu', 'zhaoliu', 1, 0, '1', 3 }
myset.add({'a':1,'b':2})
console.log(myset)  //Set(9) { 'zhangsan', 'lisi', 'wangwu', 'zhaoliu', 1, 0, '1', 3 ,{ a: 1, b: 2 }}

// 2.delete() 删除元素
myset.delete('1')
console.log(myset)  // Set(8) { 'zhangsan', 'lisi', 'wangwu', 'zhaoliu', 1, 0, 3 ,{ a: 1, b: 2 }}
// myset.delete({a:1,b:2})
// console.log(myset)  
// 3.has() 判断是否包含元素
console.log(myset.has('zhangsan'))  // true
// 4.clear() 删除所有元素
myset.clear()
console.log(myset)


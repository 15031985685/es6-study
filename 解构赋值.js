/**
 * 解构模型
 * 在解构中，有下面两部分参与：
 * 解构的源，解构赋值表达式的右边部分
 * 解构的目标，解构赋值表达式的左边部分。
 */


// 1.数组模型的解构
let [name='张三',age,six] = ['李四','22','男']
console.log(name) // 李四
console.log(age) // 22
console.log(six) //男
let [name='张三',age,six] = [,'15','男']
console.log(name) // 张三
console.log(age) // 15
console.log(six) //男

// 可忽略
let [a,,b] = [1,2,3,4,5,6]
console.log(a) // 1
console.log(b) // 3

//剩余运算符
let [a,...b] = [1,2,3,4,5,6]
console.log(a) // 1
console.log(b) // [ 2, 3, 4, 5, 6 ]


// 2.对象模型的解构
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
console.log(foo) // aaa
console.log(bar) // bbb

// 剩余运算符
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
console.log(a) // 10
console.log(b) // 20
console.log(rest) //{ c: 30, d: 40 }
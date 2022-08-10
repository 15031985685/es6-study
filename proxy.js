/**
 * Proxy
 * 一个 Proxy 对象由两个部分组成： target 、 handler 。在通过 Proxy 构造函数生成实例对象时，需要提供这两个参数。
 *  target 即目标对象， handler 是一个对象，声明了代理 target 的指定行为。
 */

 let target = {
    name: 'Tom',
    age: 24
}
let handler = {
    get: function(target, key) {
        console.log('handlergetting '+target[key]);
        return 'proxy'+target[key]; // 不是target.key
    },
    set: function(target, key, value) {
        console.log('handlersetting '+key);
        target[key] = value;
    }
}
let proxy = new Proxy(target, handler)
proxy.name     // 实际执行 handler.get  
console.log(proxy.name)  // Tom
console.log(target.name ) // proxyTom
proxy.name = 'Bob'
console.log(proxy.name ) //proxyBob
console.log(target.name ) //Bob

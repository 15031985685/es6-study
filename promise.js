
/**
 * 需求
 * 家在吉林的小明想去海南看望他的老奶奶，但小明觉得旅途如此之长，不如先去山东学习学习马保国老师的“接化发”，然后再去云南拍一个“**我是云南的 云南怒江的...**”的视频发一下朋友圈，最后再去海南看望老奶奶
 * 请你运用所学知识帮帮小明，查询吉林--山东--云南--海南的车票还有吗？
 * 如果有的话，老奶奶希望小明不要在车票上花费太多的钱，所以当小明出发时，需要告诉老奶奶本次所有车票的开销是多少
 * 如果没有的话，请你务必告诉小明是哪里的车票没有了，因为小明可能会换个路线去找老奶奶
 * 注意，当确定吉林-山东的车票未售空时才去查询山东-云南的车票是否已售空，并以此类推；因为这样的话，小明可以知道是哪个地方的车票没有了，并及时换乘
 */

// 标识每次请求的成功与否(吉林-山东、山东-云南、云南-海南)
const interface = [true, false, true]

// 查询 吉林-山东 的车票是否已售空的接口
const requestJS = () => new Promise((res, rej) => {
    setTimeout(() => {
        // 请求成功(resolve)则代表车票未售空
        if (interface[0]) return res({ ticket: true, price: 530, destination: '吉林-山东' })
        // 请求成功(rejected)则代表车票已售空
        rej({ ticket: false, destination: '吉林-山东' })
    }, 1000)
})
// 查询 山东-云南 的车票是否已售空的接口
const requestSY = () => new Promise((res, rej) => {
    setTimeout(() => {
        if (interface[1]) return res({ ticket: true, price: 820, destination: '山东-云南' })
        rej({ ticket: false, destination: '山东-云南' })
    }, 1500)
})
// 查询 云南-海南 的车票是否已售空的接口
const requestYH = () => new Promise((res, rej) => {
    setTimeout(() => {
        if (interface[2]) return res({ ticket: true, price: 1500, destination: '云南-海南' })
        rej({ ticket: false, destination: '云南-海南' })
    }, 2000)
})


let acc = 0
// 先查询吉林到山东
requestJS()
    .then(({ price: p1 }) => {
        acc += p1
        console.log(`吉林-山东的车票未售空，价格是 ${p1} RMB`)
        // 如果吉林-山东的车票未售空，则继续查询山东-云南的车票
        return requestSY()
    })
    .then(({ price: p2 }) => {
        acc += p2
        console.log(`山东-云南的车票未售空，价格是 ${p2} RMB`)
        // 如果山东-云南的车票未售空，则继续查询云南-海南的车票
        return requestYH()
    })
    .then(({ price: p3 }) => {
     // 能执行到这里，就说明前面所有请求都成功了
        acc += p3
        console.log(`云南-海南的车票未售空，价格是 ${p3} RMB`)
        console.log(`本次旅途共计车费 ${acc} RMB`)
    })
    .catch(({ destination }) => console.log(`来晚了，${destination}的车票已售空`))



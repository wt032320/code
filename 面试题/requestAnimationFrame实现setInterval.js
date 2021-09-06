// window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，
// 并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
// 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

// 返回值: 一个 long 整数，请求 ID ，是回调列表中唯一的标识。是个非零值，没别的意义。
// 你可以传这个值给 window.cancelAnimationFrame() 以取消回调函数。

function setInterval(callback, interval) {
  let timer
  const now = Date.now
  let startTime = now()
  let endTime = startTime
  const loop () => {
    timer = window.requestAnimationFrame(loop)
    endTime = now()
    if (endTime - startTime >= interval) {
      startTime = endTime = now()
      callback(timer)
    }
  }
  timer = window.requestAnimationFrame(loop)
  return timer
}

let a = 0
setInterval(timer => {
  console.log(1)
  a++
  if (a === 3) cancelAnimationFrame(timer)
}, 1000)
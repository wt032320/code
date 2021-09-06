var speed = 0
function startAnimation (obj, attr, endTarget, fn) {
clearInterval(obj.timer)
obj.timer = setInterval(function () {
  var cur = 0
  // 透明度变化处理
  if (attr === 'opacity') {
    cur = Math.round(parseFloat(getStyle(obj, attr)) * 100)
  } else {
    cur = parseInt(getStyle(obj, attr))
  }

  // 1.求速度
  speed = (endTarget - cur) / 5;
  speed = endTarget > cur ? Math.ceil(speed) : Math.floor(speed)

  // 2.临界处理
  if (endTarget === cur) {
    clearInterval(timer)
    if (fn) {
      fn()
    }
    return
  }

  // 3.运动
  if (attr === 'opacity') {
    obj.style[attr] = `alpha(opacity = ${cur + speed})`
    obj.style[attr] = (cur + speed) / 100
  } else {
    obj.style[attr] = cur + speed  + 'px'
  }
}, 30)
}
function getStyle (obj, attr) {
  if (obj.currentStyle) {
    // 兼容ie浏览器
    return obj.currentStyle[attr]
  } else {
    // 兼容主流浏览器
    return getComputedStyle(obj,null)[attr]
  }
}
var swiperWrap = document.getElementById('swiperWrap')
var swiperDiv = swiperWrap.querySelector('.swiperDiv')


var startX
var startY
console.log('ss')
// swiperDiv.ontouchstart  = function (e) {

//   console.log('afsd')
// }
// style="transform:translateX(-50px)"

swiperDiv.addEventListener('touchstart', (e) => {
  // console.log(e.targetTouches[0].clientX)
  const target = e.targetTouches[0]
  startX = target.clientX
  startY = target.clientY
  console.log('startpos')
  console.log(startX, startY)
})

swiperDiv.addEventListener('touchmove', (e) => {
  const target = e.targetTouches[0]
  const moveX = target.clientX
  const moveY = target.clientY
  const disX = moveX - startX
  const disY = moveY - startY
  let swiperX
  if (Math.abs(moveX - startX) > Math.abs(moveY - startY)) {// 水平方向上滑动
    console.log(disX)
    if (moveX - startX < 0 && moveX - startX > -100) {
      swiperX = disX
    } else if (moveX - startX <= -100) {
      swiperX = -100
    } else {
      swiperX = 0
    }
    console.log(swiperX)
    const transformX = 'translateX(' + swiperX + 'px)'
    swiperDiv.style.transform = transformX

  }

})


swiperDiv.addEventListener('touchend', (e) => {
  console.log(e)
  const target = e.changedTouches[0]
  const endX = target.clientX
  const endY = target.clientY
  const disX = Math.abs(endX - startX)
  const disY = Math.abs(endY - startY)
  let swiperX
  if (endX - startX < -30) {
    swiperX = -100
  } else {
    swiperX = 0
  }
  swiperDiv.style.transform = 'translateX(' + swiperX + 'px)'
})



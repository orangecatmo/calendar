// 滚动显示 上下箭头
// $(function () {
//   var p = 0, t = 0
//   $(window).on('scroll', function (e) {
//     p = $(this).scrollTop()
//     if (t <= p) {
//       $('#scroll_up').removeClass('scroll_show')
//       $('#scroll_down').addClass('scroll_show')
//       // 1s 后移除 显示
//       setTimeout(() => {
//         $('#scroll_down').removeClass('scroll_show')
//       }, 1000)
//     } else {
//       $('#scroll_down').removeClass('scroll_show')
//       $('#scroll_up').addClass('scroll_show')
//       // 1s 后移除 显示
//       setTimeout(() => {
//         $('#scroll_up').removeClass('scroll_show')
//       }, 1000)
//     }
//     t = p;
//   })
// })

$(function () {
  $('#scroll_down').click(scrollMove.bind(window, 'down'))

  $('#scroll_up').click(scrollMove.bind(window, 'up'))
  // 滚动
  function scrollMove(option) {
    let e = this.event
    // 每次移动高度
    let moveRang = 100
    e.preventDefault()
    let speed = $(window).scrollTop()
    if (option === 'up') {
      speed -= moveRang
    } else if (option === 'down') {
      speed += moveRang
    }
    $(window).scrollTop(speed)
  }
})
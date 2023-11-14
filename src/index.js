import './index.css'
import './main-menu.css'
import './options.css'
// const canvas = document.querySelector('#wave')
// const ctx = canvas.getContext("2d")
// const clamp = function (number, min, max) {
//     if (number < min) return min
//     if (number > max) return max
//     return number
// };
// const positiveSin = function (number) {
//     return (Math.sin(number) + 1) / 2
// }
// ctx.filter = 'blur(0.8px)'

// for (let i = 0; i < 2400; i++) {
//     ctx.beginPath()
//     const radius = clamp(+positiveSin(i / 18) * 1.5, 0.6, 1)
//     // const radius = 1.2
//     const x = 2 * i
//     const y = (Math.sin(i / 30) * 6) + 17.5
//     ctx.arc(x, y, radius, 2 * Math.PI, false)
// // rgb(75, 125, 158)
//     const green = 130 + +Math.round(positiveSin(i / 18) * 50)
//     // const green = 170
//     const opacity = clamp(+positiveSin((i + 20) / 15).toFixed(2), 0.4, 1)
//     ctx.fillStyle = `rgba(75, ${green}, 255, ${opacity})`

//     ctx.fill()
// }

// for (let i = 0; i < 2400; i++) {
//   ctx.beginPath()
//   const radius = clamp(+positiveSin(i / 18) * 1.5, 0.9, 1)
//   // const radius = 1.2
//   const x = 2 * (i + 30)
//   const y = (Math.sin(i / 30) * 6) + 17.5
//   ctx.arc(x, y, radius, 2 * Math.PI, false)
// // rgb(75, 125, 158)
//   const green = 130 + +Math.round(positiveSin(i / 18) * 100)
//   // const green = 170
//   const opacity = clamp(+positiveSin((i + 20) / 15).toFixed(2), 0.6, 1)
//   ctx.fillStyle = `rgba(75, ${green}, 255, ${opacity})`

//   ctx.fill()
// }
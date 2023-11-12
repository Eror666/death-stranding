import './index.css'
import './main-menu.css'
const canvas = document.querySelector('#wave')
const ctx = canvas.getContext("2d")
const clamp = function (number, min, max) {
    if (number < min) return min
    if (number > max) return max
    return number
};
const positiveSin = function (number) {
    return (Math.sin(number) + 1) / 2
}
ctx.filter = 'blur(0.8px)'

for (let i = 0; i < 1400; i++) {
    ctx.beginPath()
    ctx.arc(3 * i, (Math.sin(i / 23) * 5.5) + 17.5, 2, 2 * Math.PI, false)
    console.log(+positiveSin(i / 16).toFixed(2), clamp(+positiveSin(i / 16).toFixed(2), 0, 1))
    ctx.fillStyle = `rgba(99, 224, 225, ${clamp(+positiveSin((i + 20) / 20).toFixed(2), 0.05, 0.8)})`
    ctx.fill()
}

for (let i = 0; i < 1400; i++) {
    ctx.beginPath()
    ctx.arc(3 * (i + 25), (Math.sin(i / 20) * 5.5) + 17.5, 2, 2 * Math.PI, false)
    console.log(+positiveSin(i / 16).toFixed(2), clamp(+positiveSin(i / 16).toFixed(2), 0, 1))
    ctx.fillStyle = `rgba(99, 224, 225, ${clamp(+positiveSin((i + 20) / 20).toFixed(2), 0.05, 0.8)})`
    ctx.fill()
}



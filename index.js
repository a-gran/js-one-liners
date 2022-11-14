// #1 Сгенерировать случайное число в заданном промежутке
const randomRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min)
console.log('randomRange(0, 10)', randomRange(0, 10))

// #2 Сконвертировать RGB в Hex
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
console.log('rgbToHex(0, 60, 200)', rgbToHex(0, 60, 200)) // "#003cc8"

// #3 Перейти к верху страницы
// const goTop = () => window.scrollTo(0, 0)
// goTop()

// #4 Получить количество дней между двумя датами
const daysDiff = (d1, d2) => Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / (3600 * 24 * 1000))
console.log(daysDiff(new Date("2021-10-10"), new Date("2022-01-01"))) // 83

// #5 Сгенерировать случайный цвет в Hex
const randomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
console.log('randomColor', randomColor())






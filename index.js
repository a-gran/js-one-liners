// #1 Сгенерировать случайное число в заданном промежутке
const randomRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min)
console.log('randomRange(0, 10)', randomRange(0, 10))

// #2 Сконвертировать RGB в Hex
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
console.log('rgbToHex(0, 60, 200)', rgbToHex(0, 60, 200)) // "#003cc8"









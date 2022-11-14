// Сгенерировать случайное число в заданном промежутке
const randomRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min)
console.log('randomRange(0, 100)', randomRange(0, 100))
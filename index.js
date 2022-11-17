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


// #6 Проверить даты на выходной день
const isWeekday = date => date.getDay() % 6 !== 0
isWeekday(new Date("2021-10-11")) // true
console.log('isWeekday(new Date("2021-10-11"))', isWeekday(new Date("2021-10-11")))

// #7 Обрезать теги HTML d тексте
// const stripHtml = input => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || ''
// stripHtml('<h3>Текст с тегами</h3>') // "Текст с тегами"

// #8 Скрыть и показать элемент
// const toggleDisplay = el => el.style.display = (el.style.display === "none" ? "block" : "none")

// #9 Сделать строку с заглавной буквы
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
console.log(capitalize("надеемся Вам нравятся наши карточки"))

// #10 Случайно перемешать элементы в массиве
const arrayShuffle = (arr) => arr.sort(() => 0.5 - Math.random())
arrayShuffle([1, 3, 5, 7, 10]) // [10, 5, 1, 3, 7]
console.log('arrayShuffle([1, 3, 5, 7, 10])', arrayShuffle([1, 3, 5, 7, 10]))

// #11 Получить среднее арифметическое числового массива
const avg = arr => arr.reduce((a, b) => a + b) / arr.length
avg([1, 3, 8, 10]) // 5.5
console.log('avg([1, 3, 8, 10])', avg([1, 3, 8, 10]))

// #12 Выбрать случайный элемент из массива
const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)]
getRandomItem(['☀️', '☁️', '⛈️', '🌧️', '🌤️']) // '🌤️'
console.log(getRandomItem(['☀️', '☁️', '⛈️', '🌧️', '🌤️']))

// #13

// #14

// #15

// #16





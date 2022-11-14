const randomRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min)
console.log('randomRange(0, 10)', randomRange(0, 10))
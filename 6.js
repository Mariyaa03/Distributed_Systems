// Because numbers are random, they can repeat
let randNum = 0
let prevNum = 0
let finished = false

do {
    randNum = Math.floor(Math.random() * 100)
    console.log(randNum)
    if (randNum == prevNum) finished = true
    prevNum = randNum
} while (!finished)


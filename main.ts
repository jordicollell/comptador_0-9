input.onButtonPressed(Button.A, function () {
    comptador += 1
    if (comptador > 9) {
        comptador = 9
    }
})
input.onButtonPressed(Button.AB, function () {
    comptador = 0
})
input.onButtonPressed(Button.B, function () {
    comptador += -1
    if (comptador < 0) {
        comptador = 0
    }
})
let comptador = 0
basic.showNumber(0)
basic.forever(function () {
    basic.showNumber(comptador)
})

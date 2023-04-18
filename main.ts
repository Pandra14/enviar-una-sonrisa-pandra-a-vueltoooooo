radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            # # . # #
            . . . . .
            . # . # .
            # . # . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("sad")
    radio.sendNumber(2)
})
radio.setGroup(159753852456)
basic.forever(function () {
	
})

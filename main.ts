input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Scissors)
    radio.sendString("hit")
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.setGroup(128)
basic.forever(function () {
	
})

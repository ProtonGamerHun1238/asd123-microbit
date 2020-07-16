input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `)
    basic.pause(1500)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(1500)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(1500)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1500)
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("David")
})
basic.forever(function () {
	
})

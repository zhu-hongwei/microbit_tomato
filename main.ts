input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(300000)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(300000)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(300000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(300000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.pause(300000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showArrow(ArrowNames.South)
    tomato_num += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("" + (tomato_num))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000*60*5)
    basic.showLeds(`
        # # . # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(300000)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(300000)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        . . . . .
        . . . . .
        `)
    basic.pause(300000)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        . . . . .
        `)
    basic.pause(300000)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        `)
    basic.showArrow(ArrowNames.North)
})
let tomato_num = 0
tomato_num = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})

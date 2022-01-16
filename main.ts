input.onButtonPressed(Button.A, function () {
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
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000*60*5)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000*60*5)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000*60*5)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.pause(1000*60*5)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    tomato_num += 1
    while (true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showArrow(ArrowNames.South)
    }
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
    basic.pause(1000*60*1)
    basic.showLeds(`
        # # . # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000*60*1)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000*60*1)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000*60*1)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        . . . . .
        `)
    basic.pause(1000*60*1)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        `)
    while (true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showArrow(ArrowNames.North)
    }
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

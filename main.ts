input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (tomato_num))
    basic.showString("" + (working))
    basic.showString("" + (funing))
})
input.onButtonPressed(Button.AB, function () {
    if (working == 0 && funing == 0) {
        working = 1
        funing = 0
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
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
        for (let index = 0; index < 5; index++) {
            basic.clearScreen()
            basic.showArrow(ArrowNames.South)
        }
        tomato_num += 1
        basic.showString("funing")
        working = 0
        funing = 1
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000*60*1)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000*60*1)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000*60*1)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
        basic.pause(1000*60*1)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.pause(1000*60*5)
        for (let index = 0; index < 5; index++) {
            basic.clearScreen()
            basic.showArrow(ArrowNames.North)
        }
        working = 0
        funing = 0
    } else {
        basic.showIcon(IconNames.No)
    }
})
let funing = 0
let working = 0
let tomato_num = 0
tomato_num = 0
working = 0
funing = 0
basic.showIcon(IconNames.Happy)

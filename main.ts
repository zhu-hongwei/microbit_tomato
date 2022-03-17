input.onLogoEvent(TouchButtonEvent.Touched, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000*60*10)
    basic.showArrow(ArrowNames.South)
    tomato_num += 10
    basic.showLeds(`
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000*60*2)
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showString("" + (tomato_num))
})
input.onButtonPressed(Button.AB, function () {
    tomato_num += 10
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.pause(1000*60*20)
    basic.showArrow(ArrowNames.South)
    tomato_num += 20
    basic.showLeds(`
        # . # . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.pause(1000*60*4)
    basic.showArrow(ArrowNames.North)
})
let tomato_num = 0
tomato_num = 0
let working = 0
let funing = 0
basic.showIcon(IconNames.Happy)

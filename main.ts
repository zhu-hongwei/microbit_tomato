input.onLogoEvent(TouchButtonEvent.Touched, function () {
	
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
    for (let index = 0; index < 3; index++) {
        soundExpression.spring.play()
    }
    basic.showLeds(`
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000*60*2)
    for (let index = 0; index < 3; index++) {
        soundExpression.spring.play()
    }
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.Shake, function () {
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
    for (let index = 0; index < 3; index++) {
        soundExpression.spring.play()
    }
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.pause(1000*60*4)
    for (let index = 0; index < 3; index++) {
        soundExpression.spring.play()
    }
    basic.showArrow(ArrowNames.North)
})
let tomato_num = 0
tomato_num = 0
let working = 0
let funing = 0
basic.showIcon(IconNames.Happy)

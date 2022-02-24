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
    tomato_num += 1
    for (let index = 0; index < 3; index++) {
        soundExpression.spring.play()
    }
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000*60*1)
    basic.showArrow(ArrowNames.North)
    for (let index = 0; index < 10; index++) {
        soundExpression.twinkle.play()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (tomato_num))
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
    tomato_num += 1
    for (let index = 0; index < 3; index++) {
        soundExpression.spring.play()
    }
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000*60*3)
    basic.showArrow(ArrowNames.North)
    for (let index = 0; index < 10; index++) {
        soundExpression.twinkle.play()
    }
})
let tomato_num = 0
tomato_num = 0
let working = 0
let funing = 0
basic.showIcon(IconNames.Happy)

input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("" + (tomato_num))
})
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    if (working == 0 && funing == 0) {
        working = 1
        funing = 0
        basic.clearScreen()
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(500)
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
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            soundExpression.spring.play()
            basic.showArrow(ArrowNames.South)
        }
        tomato_num += 1
        working = 0
        funing = 1
        basic.pause(1000*60*1)
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
        for (let index = 0; index < 5; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
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

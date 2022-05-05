pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.forever(function () {
    while (input.isGesture(Gesture.TiltLeft)) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.showLeds(`
            . . # # .
            . # # . .
            # # . . .
            . # # . .
            . . # # .
            `)
    }
})
basic.forever(function () {
    while (input.isGesture(Gesture.LogoDown)) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # . # #
            # . . . #
            . . . . .
            `)
    }
})
basic.forever(function () {
    while (input.isGesture(Gesture.TiltRight)) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.showLeds(`
            . # # . .
            . . # # .
            . . . # #
            . . # # .
            . # # . .
            `)
    }
})
basic.forever(function () {
    while (input.isGesture(Gesture.ScreenUp)) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})

input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.showString("На вашем ПК возникла проблема мы лишь пытаемся собрать информацию об ошибке затем перезогрузим пк ваш пк называетсся LEGO SYSTEM MS-DOS")
})
let WIN_LEGO = 0
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . # #
        . . # . #
        . . # . #
        . . # . #
        . . . # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . # . . #
        . # . . #
        . # . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . . #
        . # # . #
        . # . # #
        . # . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . . . # .
        . . # # .
        `)
}
WIN_LEGO = 1
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)

input.onButtonPressed(Button.A, function () {
    Pick_Paper()
})
function Pick_Rock () {
    if (rock_index == 1) {
        Rock_Immage.showImage(0)
    }
}
function Call_Scissors () {
    if (scissor_index == 3) {
        Scissor_Immage.showImage(0)
    }
}
input.onButtonPressed(Button.B, function () {
    Call_Scissors()
})
input.onGesture(Gesture.Shake, function () {
    Pick_Rock()
})
function Pick_Paper () {
    if (paper_index == 2) {
        Paper_Immage.showImage(0)
    }
}
let Paper_Immage: Image = null
let Rock_Immage: Image = null
let Scissor_Immage: Image = null
let scissor_index = 0
let paper_index = 0
let rock_index = 0
radio.setGroup(138)
rock_index = 1
paper_index = 2
scissor_index = 3
Scissor_Immage = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
Rock_Immage = images.createImage(`
    . . . . .
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    `)
Paper_Immage = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)

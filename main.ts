input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("ASK QUESTION.SHAKE.")
    pins.setEvents(DigitalPin.P1, PinEventType.Pulse)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 4)
    if (number == 4) {
        basic.showString("YASSS")
    } else if (number == 3) {
        basic.showString("NAH")
    } else if (number == 2) {
        basic.showString("PROBS")
    } else {
        basic.showString("SUS")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Double))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Double))
    music.playTone(247, music.beat(BeatFraction.Whole))
})
let number = 0
basic.showString("MAGIC 8-BIT")
pins.digitalWritePin(DigitalPin.P1, 1)

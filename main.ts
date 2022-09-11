let _1: number = []
input.onButtonPressed(Button.A, function () {
    _1 = randint(0, 10)
    basic.showNumber(_1)
    if (_1 == 0) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else if (_1 == 0) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
})

let _1 = 0
input.onButtonPressed(Button.A, function () {
    _1 = randint(0, 10)
    basic.showNumber(_1)
    if (_1 == 0) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else if (_1 == 1) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    } else if (_1 == 2) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    } else if (_1 == 3) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    } else if (_1 == 4) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    } else if (_1 == 5) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    } else if (_1 == 6) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    } else if (_1 == 7) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    } else if (_1 == 8) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    } else if (_1 == 9) {
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    } else {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    }
})

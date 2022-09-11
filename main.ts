let _1: number = []
let _2: number = []
let no_of_list: number = []
let list: number[] = []
input.onButtonPressed(Button.A, function () {
    no_of_list = randint(1, list.length - 1)
    if (_1) {
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Double))
        music.playTone(330, music.beat(BeatFraction.Double))
        music.playTone(370, music.beat(BeatFraction.Double))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Double))
        music.playTone(330, music.beat(BeatFraction.Double))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Double))
    } else if (_2) {
        for (let index = 0; index < 3; index++) {
            music.setTempo(120)
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            for (let index = 0; index < 5; index++) {
                music.playTone(392, music.beat(BeatFraction.Half))
            }
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(370, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Whole))
        }
    }
})
basic.forever(function () {
    list = [_1, _2]
})

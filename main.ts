let sounds_on = 0
if (sounds_on) {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
} else {
    music.playTone(262, music.beat(BeatFraction.Whole))
}
basic.forever(function () {
	
})

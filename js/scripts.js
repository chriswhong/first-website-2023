const sublimeImage = '<img src="https://upload.wikimedia.org/wikipedia/en/7/7b/Sublime-RobbinTheHood.jpg" />'

const blinkImage = '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Blink-182_-_Dude_Ranch_cover.jpg/220px-Blink-182_-_Dude_Ranch_cover.jpg" />'

const countingCrowsImage = '<img src="https://upload.wikimedia.org/wikipedia/en/9/95/CountingCrowsAugustandEverythingAfter.jpg" />'

function setImage(imageHtml) {
    $('#right').empty().prepend(imageHtml)
}

$('.sublime').on('click', function () {
    setImage(sublimeImage)
})

$('.blink').on('click', function () {
    setImage(blinkImage)
})

$('.counting-crows').on('click', function () {
    setImage(countingCrowsImage)
})

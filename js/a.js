
var player = new Vimeo.Player('sample');

player.on('play', function() {
    console.log('再生');
});

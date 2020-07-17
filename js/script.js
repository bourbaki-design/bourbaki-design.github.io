
var iframe = document.querySelector('iframe');
var player = new Vimeo.Player('sample');

player.on('play', function() {
    console.log('再生');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

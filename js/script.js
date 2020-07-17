var player = new Vimeo.Player('sample');

// プレーヤー再生時にconsole表示
player.on('play', function() {
    console.log('再生');
});

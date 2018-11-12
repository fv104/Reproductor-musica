function miOnDragStart(e) {
    event.dataTransfer.setData('id', e.target.id)
    console.log('Drag start',e.target.id, ' = ',e.dataTransfer.getData('id'))
}

function miOnDragOver(e) {
    e.preventDefault();
}

function miOnDrop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData('id');
    e.target.appendChild(document.getElementById(data));
    console.log('Drag drop', data);
}


function soundcloud () {
    SC.initialize({
        client_id: 'unnFdubicpq7RVFFsQucZzduDPQTaCYy'
    });

    SC.get('/tracks', {
        q: $('#cuadro')[0].value
    }).then(function (tracks){
        //console.log(tracks)
        $('#lista').append('<div class="caratula" draggable="true"><img src="' + tracks[1].artwork_url + '" /></div>');



       /* SC.stream('/tracks/'+tracks[1].id).then(function (player){
            player.play().then(function(){
                console.log('Playback started!');
            }).catch(function(e){
                console.error('Playback rejected. Try calling play() from a user interaction.', e);
            });
        })*/
    })

}




        /*SC.stream('/tracks/293').then(function(player){
            player.play();
        });*/












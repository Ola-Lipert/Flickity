'use strict';


    var elem = document.querySelector('.carousel');

    var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    hash: true,
    pageDots: false
    });

    // restart
    var btnRestart = document.querySelector('.restart-button');
    btnRestart.addEventListener('click', function () {
        flkty.select(0);
    });

    // scroll
    var flkty = new Flickity('.carousel');
    var progressBar = document.querySelector('.progress-bar')

    flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
    });


    


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

    


'use strict';

(function () {
    // mustache
    var templateCarousel = document.getElementById('template-carousel').innerHTML;
    var carousel = document.querySelector('.carousel');

    Mustache.parse(templateCarousel);

    var carouselItems = '';

    for(var i = 0; i < data.length; i++) {
        carouselItems += Mustache.render(templateCarousel, data[i]);
        }
    
    carousel.innerHTML = carouselItems;

    // Flickity
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

    //Google Maps
    window.initMap = function() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: data[0].coords
        });

        var markers = [];

        for (let i =0; i < data.length; i++) {
            markers[i] = new google.maps.Marker({
                position: data[i].coords,
                map: map 

            });
            
            markers[i].addListener('click', function() {
                flkty.select(i);
            });
        
        }

        flkty.on('change', function (a) {
            map.panTo(data[a].coords);
            map.setZoom(12);
        });
    }

})();
    


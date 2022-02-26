/* scrollbar */
$(function() {
    $('.scrollbar').overlayScrollbars({
        scrollbars : {
            autoHide:"l"

        }
    });
});

/* gallery */
setTimeout(function () {

},100)

$(window).on('ready load resize orientationchange', function () {

    $(".grid").isotope({
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function( itemElem ) {
                var weight = $( itemElem ).find('.weight').text();
                return parseFloat( weight.replace( /[\(\)]/g, '') );
            }
        }
    });

});

// sort items on button click
// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
        originLeft: false,
    }
});

// // bind sort button click
// $('.sort-by-button-group').on( 'click', 'button', function() {
//     var sortValue = $(this).attr('data-sort-value');
//     $grid.isotope({ sortBy: sortValue });
// });
//
// // change is-checked class on buttons
// $('.button-group').each( function( i, buttonGroup ) {
//     var $buttonGroup = $( buttonGroup );
//     $buttonGroup.on( 'click', 'button', function() {
//         $buttonGroup.find('.is-checked').removeClass('is-checked');
//         $( this ).addClass('is-checked');
//     });
// });

/* lightGallery */
const container = document.getElementById("gallery-container");
lightGallery(container, {
    speed: 500,
    plugins: [lgZoom, lgFullscreen]
});


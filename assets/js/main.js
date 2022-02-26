/* scrollbar */
$(function () {
    $('.scrollbar').overlayScrollbars({
        scrollbars: {
            autoHide: "l"

        }
    });
});


/* lightGallery */

// $('.button').click(function () {
//     $('.button').removeClass('is-checked');
//     $(this).addClass('is-checked');
// });
//
// $('.button-group').each(function (i, buttonGroup) {
//     var $buttonGroup = $(buttonGroup);
//     $buttonGroup.on('click', 'button', function () {
//         $buttonGroup.find('.is-checked').removeClass('is-checked');
//         $(this).addClass('is-checked');
//     });
// });
//
// var filterFns = {
//     numberGreaterThan50: function () {
//         var number = $(this).find('.number').text();
//         return parseInt(number, 10) > 50;
//     },
//     ium: function () {
//         var name = $(this).find('.name').text();
//         return name.match(/ium$/);
//     }
// };
//
// $('#filters').on('click',"button", function () {
//     var filterValue = $(this).attr('data-filter');
//     filterValue = filterFns[filterValue] || filterValue;
//     if (filterValue === "*") {
//         $('.grid').isotope({filter: filterValue});
//     } else {
//         $('.grid').isotope({filter: $("[data-order='" + filterValue + "']")});
//     }
// });
// $('.grid').isotope({
//     itemSelector: '.grid-item',
//     layoutMode: 'fitRows',
//     originLeft: false,
//     stagger: 10,
//     getSortData: {
//         price: function (itemElem) {
//             var price = $(itemElem).attr('data-price');
//             return parseInt(price);
//         },
//         category: '[data-order] parseInt',
//     },
//     sortBy: 'category'
// });
// $('.sort-button-group').on('click', 'button', function () {
//     var sortValue = $(this).attr('data-sort-value');
//     var direction = $(this).attr('data-sort-direction');
//     var isAscending = (direction == 'asc');
//     var newDirection = (direction) ? 'desc' : 'asc';
//     $('.grid').isotope({sortBy: sortValue, sortAscending: isAscending});
// });


$(document).ready(function () {
    var $gallery = $('#gallery');
    var filterFns = {
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};

    $gallery.isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        originLeft: false,
        stagger: 10,
        getSortData: {
            price: function (itemElem) {
                var price = $(itemElem).attr('data-price');
                return parseInt(price);
            },
            category: '[data-order] parseInt',
        },
        sortBy: 'category'
    });

    $('#filters').on('click',"button", function () {

        var filterValue = $(this).attr('data-filter');
        filterValue = filterFns[filterValue] || filterValue;
        if (filterValue === "*") {
            $('.grid').isotope({filter: filterValue});
            $gallery.data('lightGallery').destroy(true);
            $("#gallery").lightGallery({
                speed: 500,
                selector: ".image",
                plugins: [lgZoom,lgFullscreen]
            });
        } else {
            $('.grid').isotope({filter: $("[data-order='" + filterValue + "']")});
            $gallery.data('lightGallery').destroy(true);
            $gallery.lightGallery({
                selector: "[data-order='"+ filterValue.replace('*', '') + "'] .image"
            });
        }


    });
});

$(document).ready(function () {
    $("#gallery").lightGallery({
        speed: 500,
        selector: ".image",
        plugins: [lgZoom,lgFullscreen]
    });
});
//button active mode
$('.sort-button-group').on('click', 'button', function () {
    var sortValue = $(this).attr('data-sort-value');
    var direction = $(this).attr('data-sort-direction');
    var isAscending = (direction == 'asc');
    var newDirection = (direction) ? 'desc' : 'asc';
    $('.grid').isotope({sortBy: sortValue, sortAscending: isAscending});
});
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});
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

    if($gallery.length){
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
    }

    $('#filters').on('click', "button", function () {

        var filterValue = $(this).attr('data-filter');
        filterValue = filterFns[filterValue] || filterValue;
        if (filterValue === "*") {
            $('.grid').isotope({filter: filterValue});
            $gallery.data('lightGallery').destroy(true);
            $("#gallery").lightGallery({
                speed: 500,
                selector: ".image",
                plugins: [lgZoom, lgFullscreen]
            });
        } else {
            $('.grid').isotope({filter: $("[data-order='" + filterValue + "']")});
            $gallery.data('lightGallery').destroy(true);
            $gallery.lightGallery({
                selector: "[data-order='" + filterValue.replace('*', '') + "'] .image"
            });
        }
    });
});

$(document).ready(function () {
    if ($("#gallery").length) {
        $("#gallery").lightGallery({
            speed: 500,
            selector: ".image",
            plugins: [lgZoom, lgFullscreen]
        });
    }
});
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

/* custom dropdown */

$("[data-dropdown]").each(function () {
    var $this = $(this);
    var findText = $(this).find(".is-checked").text();
    $this.find(".option-head .set-text").text(findText);

    $this.click(function (e) {
        var findText = $(this).find(".is-checked").text();
        $(this).find(".option-head .set-text").text(findText);
        $(this).find(".options").toggleClass("active");
        $(this).find(".arrow").toggleClass("active");


        e.preventDefault();
        e.stopPropagation();
    });
});

/* menu fixed */


$(".sidebar-sm").click(function () {
    $(".sidebar-sm").removeClass("active");
    $(".back-black").removeClass("active");
});

$(".menu-icon").click(function () {
    $(this).siblings(".sidebar-sm").addClass("active");
    $(".back-black").addClass("active");
});

$(".back-black").click(function () {
    $(".sidebar-sm").removeClass("active");
    $(this).removeClass("active");
});


//==================
//number spinner
//==================
$('[data-number-spinner]').each(function () {
    $(this).handleCounter();
})
$(document).on("click", ".nice-number", function (e) {
    e.stopPropagation();
    e.preventDefault()
});
//==================
// slider
//==================
$('[data-slider]').each(function () {
    var $this = $(this);
    var option = {
        cellAlign: $this.attr("data-cell-align"),
        asNavFor: $this.attr("data-nav-select"),
        contain: true,
        groupCells: eval($this.attr("data-disable-number")),
        wrapAround: eval($this.attr("data-loop")),
        setGallerySize: false,
        resize: true,
        prevNextButtons: false,
        cellSelector: ".item",
        pageDots: eval($this.attr("data-items-nav")),
        autoPlay: eval($this.attr("data-autoPlay")),
        pauseAutoPlayOnHover: eval($this.attr("data-pauseAutoPlayOnHover")),
        rightToLeft: false,
        fade: eval($this.attr("data-fade")),
    };
    $this.find(".this-slider").flickity(option);
    setTimeout(function () {
        $this.height($this.find(".item").outerHeight(true));
        $this.find(".this-slider").height($this.find(".item").outerHeight(true));
    }, 10);
    if ($this.parents(".slider").find(".chevron-left").length) {
        $this.parents(".slider").find(".chevron-left").click(function () {
            $(this).parents(".slider").find(".this-slider").flickity('previous');
        });
    } else {
        $this.parents(".slider").find(".chevron-left").click(function () {
            $this.find(".this-slider").flickity('previous');
        });
    }

    if ($this.parents(".slider").find(".chevron-right").length) {
        $this.parents(".slider").find(".chevron-right").click(function () {
            $(this).parents(".slider").find(".this-slider").flickity('next');
        });
    } else {
        $this.parents(".slider").find(".chevron-right").click(function () {
            $this.find(".this-slider").flickity('next');
        });
    }
    $(window).on('ready load resize orientationchange', function () {
        $this.height($this.find(".item").outerHeight(true));
        $this.find(".this-slider").height($this.find(".item").outerHeight(true));


        if ($(this).width() <= 350) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-xxs"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);

                $this.find(".this-slider").flickity('selectCell', 1);


            }
        }
        if ($(this).width() > 350 && $(this).width() < 450) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-xs"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);

                $this.find(".this-slider").flickity('selectCell', 1);


            }
        }
        if ($(this).width() > 450 && $(this).width() < 767) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-s"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);

                $this.find(".this-slider").flickity('selectCell', 1);


            }
        }
        if ($(this).width() > 767 && $(this).width() < 991) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-m"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);
            }
        }
        if ($(this).width() >= 992) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-l"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);
            }
        }
        if ($(this).width() > 1200) {
            $this.attr("data-disable-number", $this.attr("data-disable-number-xl"));
            if ($this.find(".this-slider .item").length <= $this.attr("data-disable-number")) {
                option["draggable"] = false;
                $this.find(".this-slider").flickity('destroy').flickity(option);
            } else {
                option["draggable"] = true;
                option["groupCells"] = eval($this.attr("data-disable-number"));
                $this.find(".this-slider").flickity('destroy').flickity(option);
            }

        }
    });
});

//==================
// inputmask
//==================
$.fn.hasAttr = function(name) {
    return this.attr(name) !== undefined;
};
$(document).ready(function () {
    var getComplete = false;
    if ($("[data-inputmask]").length) {

        $("[data-inputmask]").inputmask();
    }
    $("[data-section-completed]").each(function () {
        var $this = $(this);
        var $masked = $this.find(".masked-input")
            .on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
                if($(this).hasAttr("data-single-input")){
                    if ($("[data-inputmask]").inputmask("isComplete")) {
                        $(this).attr("data-single-input", true);
                        $(this).parents("[data-section-completed]").attr("data-section-completed", true);
                        $masked.siblings("button").removeAttr("disabled");
                    }else{
                        $(this).attr("data-single-input", false);
                        $(this).parents("[data-section-completed]").attr("data-section-completed", false);
                        $masked.siblings("button").attr("disabled", true);
                    }
                }

                // if ($("[data-inputmask]").inputmask("isComplete")) {
                //     $(this).parents("[data-section-completed]").attr("data-section-completed", true);
                //     $masked.siblings("button").removeAttr("disabled");
                // } else {
                //     $(this).parents("[data-section-completed]").attr("data-section-completed", false);
                //     $masked.siblings("button").attr("disabled", true);
                // }
            });

        var $single = $this.find("[data-single-input]")
            .each(function () {
                $(this).on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
                    if(!$(this).hasAttr("data-inputmask")){
                        if ($(this).val().length) {
                            $(this).attr("data-single-input", true)
                        } else {
                            $(this).attr("data-single-input", false)
                        }
                    }
                    if ($this.hasClass("group-input")) {
                        if ($(this).parents("[data-section-completed]").find("[data-single-input='true']").length
                            ===
                            $(this).parents("[data-section-completed]").find("[data-single-input]").length) {
                            $(this).parents("[data-section-completed]").attr("data-section-completed",true);
                            $(this).parents("[data-section-completed]").find(".next-step").removeAttr("disabled");
                        }else{
                            $(this).parents("[data-section-completed]").attr("data-section-completed",false);
                            $(this).parents("[data-section-completed]").find(".next-step").attr("disabled",true);
                        }
                    }
                });
            });

    });
    $(".next-step").click(function () {
        if ($(this).parents(".step").find("[data-section-completed='true']").length) {
            $(this).parents(".step").find(".indeterminate").prop({
                "indeterminate": false,
                "checked":true

            });
            $(this).parents(".main").slideUp();
            $(this).parents(".step").next(".step").find(".main").slideDown();
        }
    });
    $(".step:not(.open)").find(".main").slideUp(0)
    $(".indeterminate").prop("indeterminate", true);
});

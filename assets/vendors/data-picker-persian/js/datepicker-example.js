$(document).ready(function () {
    $('.normal-example').persianDatepicker({
        altFormat: 'DD MMMM YYYY',
        format: 'YYYY/MM/DD',
    });

    var to, from;
    to = $(".range-to-example").persianDatepicker({
        inline: true,
        altField: '.range-to-example-alt',
        altFormat: 'DD MMMM YYYY',
        format: 'YYYY/MM/DD',
        initialValue: false,
        onlySelectOnDate:false,
        navigator: {
            scroll: {
                enabled: false
            }
        },
        onSelect: function (unix) {
            to.touched = true;
            if (from && from.options && from.options.maxDate != unix) {
                var cachedValue = from.getState().selected.unixDate;
                from.options = {maxDate: unix};
                if (from.touched) {
                    from.setDate(cachedValue);
                }
            }
        }
    });
    from = $(".range-from-example").persianDatepicker({
        inline: true,
        altField: '.range-from-example-alt',
        altFormat: 'DD MMMM YYYY',
        format: 'YYYY/MM/DD',
        initialValue: false,
        navigator: {
            scroll: {
                enabled: false
            }
        },
        onSelect: function (unix) {
            from.touched = true;
            if (to && to.options && to.options.minDate != unix) {
                var cachedValue = to.getState().selected.unixDate;
                to.options = {minDate: unix};
                if (to.touched) {
                    to.setDate(cachedValue);
                }
            }
        }
    });
    $(".set-datepicker").click(function (e) {
        $(".calender").fadeIn();
        e.stopPropagation();
    });
    $(window).click(function () {
        $(".calender").fadeOut();
    });

});
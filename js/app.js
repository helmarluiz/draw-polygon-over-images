


$(document).ready(function () {

    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).val()).select();
        document.execCommand("copy");
        $temp.remove();
    }

    /* register event for file upload  */
    $("#file").change(function (e) {
        var file, _URL = window.URL || window.webkitURL;

        if ((file = this.files[0])) {
            var app = new painter();
            var json = '{}';
            var resultCallback = function (ret) {
                console.log(ret);
                setTimeout(function () {
                    $('#result').val(JSON.stringify(ret));
                }, 200);
            }
            app.run(_URL.createObjectURL(file), json, resultCallback);
        }

    });

    /* register tootip */
    $('[data-toggle="tooltip"]').tooltip()

    /* register popover */
    $("[data-toggle=popover]").popover({
        trigger: 'click',
        placement: "bottom",
        html: true,
        content: function () {

            return $($.parseHTML('<div class="form-group"><div class="form-row"><textarea id="result" class="json-result-text-area form-control"></textarea></div>\
                <button class="btn btn-sm btn-secondary mt-1 copy-btn">Copy</button></div>'));
        }
    });
    

    $('html').on('click', function (e) {

        /* copy result to clipboard */
        if ($(e.target).hasClass('copy-btn')) {
            copyToClipboard('#result');
        }

        /* Auto-Close popover when clicking outsite it */
        if (typeof $(e.target).data('original-title') == 'undefined' &&
            !$(e.target).parents().is('.popover-body')) {
            $('[data-original-title]').popover('hide');
        }
    });
});
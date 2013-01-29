; (function($) {
    $.fn.extend({
        savePrintElement: function() {
            var target = $(this);
            var printElement = target.next(".print-element");
            printElement = printElement.attr("class") != undefined ? printElement : $("<span></span>").addClass("print-element").insertAfter(target);
            if (target.is("select")) {
                var selectedOptions = target.children("option:selected");
                var selectedTextValues = new Array();
                selectedOptions.each(function(i, selectedOption) {
                    selectedTextValues.push($(selectedOption).text());
                });
                printElement.text(selectedTextValues.join(","));
            }
            else if (target.is("input[type=text]")) {
                printElement.addClass("input-" + target.attr("type") + "-print").text(target.val());
            }
            else {
                printElement.text(target.val());
            }

            if (!target.is(":visible"))
                printElement.hide();
        }
    });

    $.setupPrintPreview = function() {
        $("input[type=text],textarea,select").on("change", function() {
            $(this).savePrintElement();
        });

        $("input[type=text],textarea,select").each(function(i, element) {
            var $element = $(element);
            $element.addClass("screen-element");
            $element.savePrintElement();
        });

        $("input[type=text]").each(function(i, element) {
            var $element = $(element);
            $element.addClass("input-" + $element.attr("type"));
        });
    };
})(jQuery);

$(function() {
	$.setupPrintPreview();
});
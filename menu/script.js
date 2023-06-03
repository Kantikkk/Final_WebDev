$(document).ready(function() {
    $(".box-section").click(function() {
        var collapseState = $(this).find(".collapse-state");
        var collapseContent = $(this).find(".collapse-content");
        if ($(this).hasClass("collapsed")) {
            collapseState.text("Collapse");
            collapseContent.slideDown(600, function() {
                $(this).parent().removeClass("collapsed");
            }); 
        } else {
            collapseState.text("Expand");
            collapseContent.slideUp(600, function() {
                $(this).parent().addClass("collapsed");
            }); 
        }
    });
});

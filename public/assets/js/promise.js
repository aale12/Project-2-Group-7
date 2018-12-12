$(document).ready(function() {
    // const newTimelineName = $("#newTimelineName").val();
    // const newTimelineDesc = $("#newTimelineDesc").val();
    // const newTimelineLimit = $("#newTimelineLimit").val();
    //$(document).on("click", "#newTimelineSubmit", createTimeline);
    $("#hiddenTimelimit, #editableCheck").hide();

    //show timelimit on checkBox
    $(function() {
        $("#timeLimitCheck").change(function() {
            if ($("#timeLimitCheck").is(":checked")) {
                $("#hiddenTimelimit").fadeIn();
            } else {
                $("#hiddenTimelimit")
                    .fadeOut()
                    .val("");
            }
        });
    });
    $(function() {
        $("#publicCheck").change(function() {
            if ($("#publicCheck").is(":checked")) {
                $("#editableCheck").fadeIn();
            } else {
                $("#editableCheck")
                    .fadeOut()
                    .val("");
            }
        });
    });
});

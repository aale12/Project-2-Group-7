$(document).ready(function() {
    // const newTimelineName = $("#newTimelineName").val();
    // const newTimelineDesc = $("#newTimelineDesc").val();
    // const newTimelineLimit = $("#newTimelineLimit").val();
    //$(document).on("click", "#newTimelineSubmit", createTimeline);
    const userId = $("#userIdDashboard").val();
    console.log(userId);
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
    checkForExistingTimeline(userId);
    function checkForExistingTimeline(id) {
        $.get("/api/timeline/" + id, function(data) {
            console.log(data.length);
            if (data.length !== 0) {
                $("#addTimelineButtonDashboard").hide();
            }
        });
    }
});

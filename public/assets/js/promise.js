$(document).ready(function() {
    const newTimelineName = $("#newTimelineName").val();
    const newTimelineDesc = $("#newTimelineDesc").val();
    const newTimelineLimit = $("#newTimelineLimit").val();
    $(document).on("click", "#newTimelineSubmit", createTimeline);

    function createTimeline() {
        console.log(newTimelineName, newTimelineDesc, newTimelineLimit);
    }
});

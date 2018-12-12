$(document).ready(function() {
    // const newTimelineName = $("#newTimelineName").val();
    // const newTimelineDesc = $("#newTimelineDesc").val();
    // const newTimelineLimit = $("#newTimelineLimit").val();
    //$(document).on("click", "#newTimelineSubmit", createTimeline);
    const dbusername = [];
    const dbuserId = [];
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
    $.get("/api/user/", function(data) {
        console.log(data);
        // eslint-disable-next-line prettier/prettier
        data.forEach((e) => {
            dbusername.push(e.username);
            dbuserId.push(e.id);
        });
        console.log(dbusername);
    }).then(function() {
        $.get("/api/event", function(data) {
            const revData = data.slice(0).reverse();
            // eslint-disable-next-line prettier/prettier
            revData.forEach((e) => {
                $("#eventsBody").append(
                    `<tr>
                <td>${moment(e.createdAt).format("MMM Do, YYYY hh:mm:ss")}</td>
                <td>${e.id}</td>
                <td>${e.description}</td>
                <td>${dbusername[e.userId - 1]}</td>
                </tr>`
                );
            });
        });
    });
});

// SCRIPT //

$(document).ready(function() {
    console.log("ready");
    todaysDate();
    $("#hider").hide(); // hides count div
    $("a.show").on("click", function() {
        $("#hider").toggle();
        $("#leverbaar.show").on("click", function() {
            $("#leverbaar").val(n_days);
        });
    });
    // check user input
    $("#werkdagen").keyup(function() {
        alert($(this).val());
    });

    /*  $( "#hider" ).hide(); // hides count div */
});

// FUNCTIONS //

// create date function
function todaysDate() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    //output
    var today =
        (day < 10 ? "0" : " ") +
        day +
        (month < 10 ? "0" : " ") +
        " / " +
        month +
        " / " +
        d.getFullYear();
    $("p.datum_vandaag").html(today);

    var date = new Date();
    console.log(date);
}

// RETURNING DELIVERY DAYS
//                    yyyy-MM-dd hh:mm:ss
function deliveryDays() {
    var start = new Date("2019-10-25T00:00:00Z"),
        end = new Date("2019-11-10T00:00:00Z"),
        holiday = [
            new Date("2019-10-27T00:00:00Z"),
            new Date("2030-05-03T00:00:00Z")
        ],
        i = holiday.length,
        n_days = 0;
    while (i--) {
        // loop over holidays
        if (holiday[i] >= start)
            if (holiday[i] <= end) n_days = n_days - 1; // day holiday within dates
    }
    while (start <= end) {
        if (start.getUTCDay()) n_days = n_days + 1; // not sunday
        start.setUTCHours(24); // add a day
    }
    $("#werkdagen").html(n_days);
    console.log(n_days); // 12
}

// subtracting days from the input field
/* $(function() {
    $("#werkdagen, .b2").on("keydown keyup", sub);

    function sub() {
        $(".c2").val(Number($("#werkdagen").val()) - Number($(".b2").val()));
    }
}); */
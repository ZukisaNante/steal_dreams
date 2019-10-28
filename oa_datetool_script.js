// SCRIPT //

$(document).ready(function() {
    console.log("ready");
    todaysDate();
    deliveryDays();
    delivery();
    $("#hider").hide(); // hides count div
    $(".me").hide(); // hide button
    $("a.show").on("click", function() {
        $("#hider").toggle();
        $(".me").toggle(); // show button
    });
    // check if user input changed
    $('input#werkdagen').change(function(e) {
        alert(e.target.value);
    });
    // show input value in the form
    $('.showHider').submit(function(e) {
        e.preventDefault();
        var dagen = $('input#werkdagen').val();
        console.log(dagen);
    });
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

}



// RETURNING DELIVERY DAYS
//                    yyyy-MM-dd hh:mm:ss
function deliveryDays() {
    var start = new Date("2019-10-25T00:00:00Z"),
        end = new Date("2019-11-10T00:00:00Z"),
        holiday = [
            ["New Years Day", [1, 1]],
            ["Easter Monday", [22, 4]],
            ["Christmas Day", [12, 25]],
            ["Labour Day", [30, 5]],
            ["Pentecost Monday", [10, 6]],
            ["Belgium National Day ", [21, 6]],
            [" Assumption Day ", [15, 8]],
            ["Presidents Day ", [3, 1, 2]],
            ["All Saints’ Day ", [1, 11]],
            ["Armistice Day", [11, 11]]
        ];
    /*  holiday = [
                          new Date("2019-10-27T00:00:00Z"),
                          new Date("2030-05-03T00:00:00Z")
                      ], */
    (i = holiday.length), (n_days = 0);
    while (i--) {
        // loop over holidays
        if (holiday[i] >= start)
            if (holiday[i] <= end) n_days = n_days - 1; // day holiday within dates
    }
    while (start <= end) {
        if (start.getUTCDay()) n_days = n_days + 1; // not sunday
        start.setUTCHours(24); // add a day
    }
    $("p.deliver").html(
        "Uw product kan binnen" + " " + n_days + " " + "dagen geleveerd worden!"
    );
    console.log(n_days); // 12
}

// Function delivery date 2
function delivery() {
    var today = new Date(); //
    var business_days = $("#werkdagen").val();
    console.log(business_days);

    var deliveryDate = today; //will be incremented by the for loop
    var total_days = business_days; //will be used by the for loop
    for (var days = 1; days <= total_days; days++) {
        deliveryDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
        if (deliveryDate.getDay() == 0 || deliveryDate.getDay() == 6) {
            //it's a weekend day so we increase the total_days of 1
            total_days++;
        }
    }
    $("p.leverbaar").html("Uw product kan geleverd worden op  " + deliveryDate.toLocaleDateString("en-GB"));
    console.log(today);
    console.log(deliveryDate);
}
// onchange event lister
var result = ' ';
$('input').change(function() {
    if (result == ' ') {
        result = $(this).val();
    } else {
        result += ',' + $(this).val();
    }
    $('p.delivery').html(result);
})
$(document).on('change', 'input', function() {
    // CODE DIE UIT GEVOERD MOET WORDEN 'ON CHANGE' HIER
    //$(".pp-comm-input").val("");
});
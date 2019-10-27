// SCRIPT //

$(document).ready(function() {
    console.log("ready");
    todaysDate();
    // deliveryDays();
    delivery();
    $("#hider").hide(); // hides count div

    $("a.show").on("click", function() {
        $("#hider").show();
    });
    // check if user input changed
    $("input#werkdagen").change(function(e) {
        // alert(e.target.value);
        delivery();
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
            // holidays
            total_days++;
        }
    }

    $("p.leverbaar").html(
        "Uw product kan geleverd worden op  " +
        deliveryDate.toLocaleDateString("en-GB")
    ); // better with "toDateString()" i think
    // console.log(today);
    //  console.log(deliveryDate);
}

// TEST HOLIDAY FUNCTION

function holiday() {
    var holiday = [
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

    for (var i in holiday) {
        deivery();
        if (
            holiday[i] >= deliveryDate.getDay() == 6 &&
            deliveryDate.getDay() == 0
        ) {
            // Check if specific holyday is Saturday or Sunday
            var yourDate = new Date(holidays[i]);
            if (yourDate.getDay() == 6 || yourDate.getDay() == 0) {
                // If it is.. do nothing
            } else {
                // if it is not, reduce a day..
                total_days--;
                console.log(total_days);
            }
        }
    }
    console.log(deliveryDate);
}
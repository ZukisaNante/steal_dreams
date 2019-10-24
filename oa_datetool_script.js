// SCRIPT //

$(document).ready(function() {
    console.log("ready");
    todaysDate();
    deliveryDays();
    delivery();
    $("#hider").hide(); // hides count div
    $("a.show").on("click", function() {
        $("#hider").toggle();

        // $(".leverbaar").val(n_days);
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
    $("p.leverbaar").html(
        "Uw product zal binnen" + " " + n_days + " " + "dagen geleveerd worden!"
    );
    console.log(n_days); // 12
}

// subtracting days from the input field

/* $(document).ready(function() {
    //this calculates values automatically
    sum();
    $("#num1, #num2").on("keydown keyup", function() {
        sum();
    });
});

function sum() {
    var num1 = document.getElementById("werkdagen").value;
    var num2 = document.getElementsByClassName("leverbaar").value;
    //var result = parseInt(num1) + parseInt(num2);
    var result1 = parseInt(num2) - parseInt(num1);
    if (!isNaN(result)) {
        document.getElementById("sum").value = result;
        document.getElementById("subt").value = result1;
    }
} */

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

    $("p.leverbaar").html("Uw product kan geleverd worden op" + deliveryDate);
    console.log(today);
    console.log(deliveryDate);
}
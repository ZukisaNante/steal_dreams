// SCRIPT //

$(document).ready(function() {
    console.log("ready");
    todaysDate();

    // deliveryDays();
    delivery();
    $("#hider").hide(); // hides count div
    $(".startdatum-wrapper").hide(); // hides container rapper

    $("a.show").on("click", function() {
        $("#hider").show();
    });
    // check if user input changed
    $("input#werkdagen").change(function(e) {
        // alert(e.target.value);
        delivery();
    });

    //HIDE SHOW CONTAINER WRAPPER ON ONCLICK EVENT
    $("a.startdatum").on("click", function() {
        $(".leverdatum-wrapper").hide();
        $(".startdatum-wrapper").hide();
        $(".startdatum-wrapper").show();
    });

    //HIDE SHOW CONTAINER WRAPPER ON ONCLICK EVENT
    $("a.berekendatum").on("click", function() {
        $(".leverdatum-wrapper").hide();
        $(".startdatum-wrapper").hide();
        $(".leverdatum-wrapper").show();
    });
    // INSERT INPUT VALUES INTO AN ARRAY WITH INVOEREN BUTTON CLICK
    $("a.invoeren").on("click", function() {
        inputDataValues();
    });

});

// FUNCTIONS //

// SHOW TODAY'S DATE
function todaysDate() {
    var d = new Date();
    var td = d.toLocaleDateString("en-GB");

    $("p.datum_vandaag").html(td);
}

// COUNT DATA AND EXCLUDE WEEKENDS AND HOLIDAYS
function delivery() {

    var today = new Date();
    var business_days = $("#werkdagen").val();
    console.log(business_days);
    var deliveryDate = today; //will be incremented by the for loop
    var total_days = business_days; //will be used by the for loop
    for (var days = 1; days <= total_days; days++) {
        var currentYear = (new Date).getFullYear();

        //HOLIDAYS ARRAY
        var holiday = [new Date(currentYear + '-11-01'), new Date(currentYear + '-06-10'), new Date(currentYear + '-11-11'), new Date(currentYear + '-01-01'), new Date(currentYear + '-04-22'), new Date(currentYear + '-12-25'), new Date(currentYear + '-05-30'), new Date(currentYear + '-07-21'), new Date(currentYear + '-08-15'), new Date(currentYear + '-05-01')];
        //GET DATE AND CHECK IF IT'S WEEKEND OR NOT, IF YES INCREMENT total_days +1
        deliveryDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
        if (deliveryDate.getDay() == 0 || deliveryDate.getDay() == 6) {
            total_days++;
        }
        //GET HOLIDAYS AND CHECK TO SEE IF IT'S A HOLIDAY OR NOT, IF YES INCREMENT total_days +1
        for (var i = 0; i < holiday.length; i++) {
            if (deliveryDate.toLocaleDateString("en-GB") == holiday[i].toLocaleDateString("en-GB")) {
                console.log("SUCCES!!");
                total_days++;
            }
        }

        $('p.leverbaar').html("Uw product kan geleverd worden op: " + deliveryDate.toLocaleDateString("en-GB"));
        console.log("DELI // " + deliveryDate);

    }
}

// FUNCTION INPUT VALUES
function inputDataValues() {
    // STORE INPUT VALUES INTO AN ARRAY
    var inputValues = [];
    $('Input').each(function() {
        inputValues[this.name] = $(this).val();
    });

    console.log(inputValues['verlof_jaar'], inputValues['verlof_dag'], inputValues['verlof_maand']);
}
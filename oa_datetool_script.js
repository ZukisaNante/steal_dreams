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

// Toon datum van vandaag //
function todaysDate(){
	var d = new Date();
	var td = d.toLocaleDateString("en-GB");

	$("p.datum_vandaag").html(td);
}

// Tel data op en sla weekends en feestdagen over // 
function delivery() {

    var today = new Date(); //
    var business_days = $("#werkdagen").val();
    console.log(business_days);
    var deliveryDate = today; //will be incremented by the for loop

    var total_days = business_days; //will be used by the for loop
    for (var days = 1; days <= total_days; days++) {

    	var currentYear = (new Date).getFullYear();
		//console.log("YE // " + currentYear);

			var holiday = [

					new Date(currentYear + '-11-01'),
					new Date(currentYear + '-11-06'),
					new Date(currentYear + '-11-11')

			];

			/* 

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

			*/

	        deliveryDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
	        if (deliveryDate.getDay() == 0 || deliveryDate.getDay() == 6) {
	            //it's a weekend day so we increase the total_days of 1
	            // holidays
	            total_days++;
	        }

	        for (var i = 0; i < holiday.length; i++) {
	            if (deliveryDate.toLocaleDateString("en-GB") == holiday[i].toLocaleDateString("en-GB")) {
	            //it's a weekend day so we increase the total_days of 1
	            // holidays
	            console.log("SUCCES!!");
	            total_days++;
	        }
    	}

    	$('p.leverbaar').html("Uw product kan geleverd worden op: " + deliveryDate.toLocaleDateString("en-GB"));
        console.log("DELI // " + deliveryDate);
        //console.log("HOLY // " + holiday);
       }
}

//

// SCRIPT //

$(document).ready(function() {
    todaysDate();
    delivery();
    $("#hider").hide(); // hides count div
    $(".startdatum-wrapper").hide(); // hides container rapper
    $("#werkdagen").focus();
    $("a.show").on("click", function(e) { 
        if($("input#werkdagen").val() == ""){
            e.preventDefault();
     
    //CALLED WHEN THE KEY IS PRESSED
      $("#werkdagen").keypress(function (e) {

        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

           //display error message
           $("#errmsg").html("Alleen Cijfers!").show().fadeOut("slow");
                  return false;
       }
      }); } else { $("#hider").show();}
    });

    // CHECK IF USER INPUT CHANGED
    $("input#werkdagen").change(function() {
        $("#werkdagen").keypress(function (e) {
            //if the letter is not digit then display error and don't type anything
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               //display error message
               $("#errmsg").html("Alleen Cijfers!").show().fadeOut("slow");
                      return false;
           }
          });

        delivery();
    });

    //HIDE SHOW CONTAINER WRAPPER ON ONCLICK EVENT
    $("a.startdatum").on("click", function() {
        $(".leverdatum-wrapper").hide();
        $(".startdatum-wrapper").hide();
        $(".startdatum-wrapper").show();
        //$(".showHider").valid();

    });

    //HIDE SHOW CONTAINER WRAPPER ON ONCLICK EVENT
    $("a.berekendatum").on("click", function() {
        $(".leverdatum-wrapper").hide();
        $(".startdatum-wrapper").hide();
        $(".leverdatum-wrapper").show();
    });
    // INSERT INPUT VALUES INTO AN ARRAY WITH INVOEREN BUTTON CLICK
    $("a.invoeren").on("click", function(e) {
        if($("input#jaar").val() == "" || $("input#maand").val() == "" || $("input#dag").val() == "" ){
            e.preventDefault();
            $("#jaar").keypress(function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                   $("#errmsg").html("Alleen Cijfers!").show().fadeOut("slow");
                          return false;
               }
              });
              $("#maand").keypress(function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                   $("#errmsg").html("Alleen Cijfers!").show().fadeOut("slow");
                          return false;
               }
              });

              $("#dag").keypress(function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                   $("#errmsg").html("Alleen Cijfers!").show().fadeOut("slow");
                          return false;
               }
              });

        } else{
            yearValidation();
            inputDataValues();
        }
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
    var verlof_jaar = $("#verlof_jaar").val();
    var verlof_maand = $("#verlof_maand").val();
    var verlof_dag = $("#verlof_dag").val();
    var month = {
            January: "1",
            February: "2",
            March: "3",
            April: "4",
            May: "5",
            June: "6",
            July: "7",
            August: "8",
            September: "9",
            October: "10",
            November: "11",
            December: "12"
        }
        //var month_convert = new Date(month);
    var inputValues = [new Date(verlof_dag + " - " + verlof_maand + " - " + verlof_jaar)];
    $('Input').each(function() {
        inputValues[this.name] = $(this).val();
    });

    console.log(inputValues['verlof_dag'], inputValues['verlof_maand'], inputValues['verlof_jaar']);
}


 // Restricts input for each element in the set of matched elements to the given inputFilter.
(function($) {
    $.fn.inputFilter = function(inputFilter) {
      return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
      });
    };
  }(jQuery));
  
  
  // INSTALL INPUT FILTERS
  $("#werkdagen").inputFilter(function(value) {
    return /^\d*$/.test(value); });
    $("#jaar").inputFilter(function(value) {
        return /^\d*$/.test(value); });
        $("#dag").inputFilter(function(value) {
            return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 31); });
  $("#maand").inputFilter(function(value) {
    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 12); });
  

// YEAR VALIDATION
function yearValidation(year,ev) {

  var text = /^[0-9]+$/;
  if(ev.type=="blur" || year.length==4 && ev.keyCode!=8 && ev.keyCode!=46) {
    if (year != 0) {
        if ((year != "") && (!text.test(year))) {

            alert("Alleen Cijfers!");
            return false;
        }

        if (year.length != 4) {
            alert("Jaar is niet correct");
            return false;
        }
        var current_year=new Date().getFullYear();
        if((year < 1920) || (year > current_year))
            {
            alert("Het jaar moet tussen 1920 en het huidige jaar liggen");
            return false;
            }
        return true;
    } }
}


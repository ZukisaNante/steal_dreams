// SCRIPT //
var today = new Date();
var currentYear = (new Date).getFullYear();
var holiday = [new Date(currentYear + '-11-01'), new Date(currentYear + '-06-10'), new Date(currentYear + '-11-11'), new Date(currentYear + '-01-01'), new Date(currentYear + '-04-22'), new Date(currentYear + '-12-25'), new Date(currentYear + '-05-30'), new Date(currentYear + '-07-21'), new Date(currentYear + '-08-15'), new Date(currentYear + '-05-01')];

$(document).ready(function() {
    showData();
    todaysDate();
    delivery();
    $(".vrijdagen-wrapper").hide();
    $("#hider").hide(); // hides count div
    $(".startdatum-wrapper").hide(); // hides container rapper
    $("#werkdagen").focus();
    $("a.show").on("click", function(e) {
        if ($("input#werkdagen").val() == "") {
            e.preventDefault();

            //CALLED WHEN THE KEY IS PRESSED
            $("#werkdagen").keypress(function(e) {

                //if the letter is not digit then display error and don't type anything
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

                    //display error message
                    $("#errmsg").html("Alleen Cijfers!").show().fadeOut("slow");
                    return false;
                }
            });
        } else { $("#hider").show(); }
    });

    // CHECK IF USER INPUT CHANGED
    $("input#werkdagen").change(function() {
        $("#werkdagen").keypress(function(e) {
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


    //SHOW HOLIDAY DATES
    $(".bekijk_data").on("click", function() {
        $(".array-list").html("");
        $(".vrijdagen-wrapper").toggle();
        $(".invis").toggle();
        showDates();
        showData();
        $(".vrijdagen-wrapper").focus();
    });

    // DELETE DATA IN THE LIST BUTTON
    $(".delete").on("click", function(e) {
        e.preventDefault();
        $("li").last().remove();
        //holiday.pop();
        console.log(holiday);
    });

    // EDIT DATA IN THE LIST BUTTON
    $(".edit_data").on("click", function(e) {
        e.preventDefault();
        $(this.$('li')).html("<input type='text' id='test' value='Hello World'/>");
        $('#test').focus();
        event.stopPropagation();
        //$( "li" ).last().find();
        //holiday.pop();
        console.log(holiday);

    });

    // DELETE ITEMS USING SPAN
    $(document).on('click', '.date_delete', function() {
        var transaction_id = $(this).attr('id').replace('row', '');
        alert("Delete this item?" + transaction_id);
        $(this).parent().remove();
        arrayDeleteUpdate();
    });
    // EDIT ITEMS USING SPAN
    $(document).on("click", '.date_edit', function(e) {
        e.preventDefault();
        $(this).parent().html("<input type='text' id='test'/>");
        $('#test').focus();
        $(this).replaceWith(input);
        event.stopPropagation();
    });


    // INSERT INPUT VALUES INTO AN ARRAY WITH INVOEREN BUTTON CLICK
    $("a.invoeren").on("click", function(e) {
        if ($("input#jaar").val() == "" || $("input#maand").val() == "" || $("input#dag").val() == "") {
            e.preventDefault();
            $("#jaar").keypress(function(e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    $("#errmsg").html("Alleen Cijfers!").show().fadeOut("slow");
                    return false;
                }
            });
            $("#maand").keypress(function(e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    $("#errmsg").html("Alleen Cijfers!").show().fadeOut("slow");
                    return false;
                }
            });

            $("#dag").keypress(function(e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    $("#errmsg").html("Alleen Cijfers!").show().fadeOut("slow");
                    return false;
                }
            });

        } else {
            // yearValidation(year, ev);
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
    var verlof_jaar = $("#jaar").val();
    console.log(verlof_jaar + " // JAAR");
    var verlof_jaar_str = verlof_jaar.toString();
    var verlof_maand = $("#maand").val();
    var verlof_maand_str = String(verlof_maand);
    var verlof_dag = $("#dag").val();
    var verlof_dag_str = String(verlof_dag);
    //var month_convert = new Date(month);

    // NEW HOLIDAY


    /* var inputValues = [((new Date).getFullYear(verlof_jaar) + " / " + (new Date).getMonth(verlof_maand) + " / " + (new Date).getDay(verlof_dag))]; */


    var inputValues = new Date(verlof_jaar_str + '-' + verlof_maand_str + '-' + verlof_dag_str);

    //var inputValues = new Date(currentYear + '-05-30')

    var pushed = holiday.push(inputValues);
    //console.log(holidayADD);


    console.log(inputValues['verlof_dag'], inputValues['verlof_maand'], inputValues['verlof_jaar']);
    console.log(pushed);
    JSON.stringify(holiday);
    console.log(holiday);
    //JSON.stringify(holiday);
}

function showDates() {

    $.each(holiday, function(index, holi) {

        index += 1;
        var holi_d = holi.toLocaleDateString("en-GB");
        $(".array-list").append("<li> Holiday " + index + ": " + holi_d + " (<span class='date_delete' id='delete_'>Verwijderen </span> | <span class='date_edit'> Bewerken</span>) </li>");
    });

}

//RETRIEVE DATA FROM ARRAY TO TABLE

function showData() {
    var table = $('#myTable');
    var row, cell;
    for (var i = 0; i < holiday.length; i++) {
        row = $('<tr />');
        table.append(row);
        for (var j = 0; j < holiday[i].length; j++) {
            cell = $('<td>' + holiday[i][j] + '</td>')
            row.append(cell);
        }
    }

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
    return /^\d*$/.test(value);
});
$("#jaar").inputFilter(function(value) {
    return /^\d*$/.test(value);
});
$("#dag").inputFilter(function(value) {
    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 31);
});
$("#maand").inputFilter(function(value) {
    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 12);
});

$("#werkdagen").inputFilter(function(value) {
    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 31);
});


// YEAR VALIDATION
/* function yearValidation(year, ev) {

    var text = /^[0-9]+$/;
    if (ev.type == "blur" || year.length == 4 && ev.keyCode != 8 && ev.keyCode != 46) {
        if (year != 0) {
            if ((year != "") && (!text.test(year))) {

                alert("Please Enter Numeric Values Only");
                return false;
            }

            if (year.length != 4) {
                alert("Year is not proper. Please check");
                return false;
            }
            var current_year = new Date().getFullYear();
            if ((year < 1920) || (year > current_year)) {
                alert("Year should be in range 1920 to current year");
                return false;
            }
            return true;
        }
    }
} */

// DELETE ITEM FROM ARRAY AND RETURN NEW ARRAY LIST
function arrayDeleteUpdate() {
    var indexToRemove = $(this.$('li'));
    holiday.splice(indexToRemove, 1);
    console.log(holiday);
}

//EDIT BUTTON CHECK WITH EDITABLE PLUGIN
$('span.editable').click(function() {
    var input = $('<input type="text" />', {
        value: $(this).text()
    }).click(function() {
        $.get('editsave.php?tekstny=' + $(this).value(), function(response) {
            var span = $('span', {
                text: response
            });
            $(this).replaceWith(span);
        });
    });
    $(this).replaceWith(input);
});
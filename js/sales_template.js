var dropdownValueRow1 = this.getField("Product Description Line 1").value;
var catalogRow1Field = this.getField("Catalog Row1");
if (dropdownValueRow1 === "HiPoint™ 70 catheter system") {
    catalogRow1Field.value = "1004";
} else if (dropdownValueRow1 === "HiPoint™ 88 catheter system") {
    catalogRow1Field.value = "2004";
} else if (dropdownValueRow1 === "FreeClimb™ 70 reperfusion system") {
    catalogRow1Field.value = "7001";
} else if (dropdownValueRow1 === "Base Camp® sheath system") {
    catalogRow1Field.value = "5001";
} else if(dropdownValueRow1 === "Tenzing™ 7 delivery catheter") {
    catalogRow1Field.value = "1005";
} else {
    catalogRow1Field.value = ""; // Clear the field if none of the specified options are selected
}


// list price
var dropdownValue = this.getField("Product Description Line 1").value;
var listPriceRow1Field = this.getField("List PriceRow1");
if (dropdownValueRow1 === "HiPoint™ 70 catheter system") {
    listPriceRow1Field.value = "5625";
} else if (dropdownValueRow1 === "HiPoint™ 88 catheter system") {
    listPriceRow1Field.value = "5625";
} else if (dropdownValueRow1 === "FreeClimb™ 70 reperfusion system") {
    listPriceRow1Field.value = "4900";
} else if (dropdownValueRow1 === "Base Camp® sheath system") {
    listPriceRow1Field.value = "1040";
} else if(dropdownValueRow1 === "Tenzing™ 7 delivery catheter") {
    listPriceRow1Field.value = "5625";
} else {
    listPriceRow1Field.value = ""; // Clear the field  if none of the specified options are selected
}

// discount price
var dropdownValueRow1 = this.getField("Product Description Line 1").value;
var discountPriceRow1 = this.getField("Discount RateRow1");

if (dropdownValueRow1 === "HiPoint™ 70 catheter system" && event.value < 4500) {
    app.alert("The price you entered is below floor price.");
    event.rc = false;
} else if (dropdownValueRow1 === "HiPoint™ 88 catheter system" && event.value < 4500) {
    app.alert("The price you entered is below floor price.");
    event.rc = false;
} else if (dropdownValueRow1 === "FreeClimb™ 70 reperfusion system" && event.value < 4100) {
    app.alert("The price you entered is below floor price.");
    event.rc = false;
} else if (dropdownValueRow1 === "Base Camp® sheath system" && event.value < 850) {
    app.alert("The price you entered is below floor price.");
    event.rc = false;
} else if(dropdownValueRow1 === "Tenzing™ 7 delivery catheter" && event.value < 1700) {
    app.alert("The price you entered is below floor price.");
    event.rc = false;
}

if (isNaN(event.value)) {
    app.alert("Value must be a number");
    event.rc = false;
}
if (event.value < 0 || event.value > 16) {
    app.alert("Value must be between 0-16");
    event.rc = false;
}

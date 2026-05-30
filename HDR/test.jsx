// Một số key thường dùng:
// Cyn // Cyan
// Mgnt // Magenta
// Ylw // Yellow
// Blck // Black

// Một số vùng màu:
// "Rds " // Reds
// "Ylws" // Yellows
// "Grns" // Greens
// "Cyns" // Cyans
// "Bls " // Blues
// "Mgnt" // Magentas

//exambles
setSelectiveColor("Bls ", {
    "Cyn ": -42,
    "Ylw ": 100
});

function setSelectiveColor(colorRange, values) {

    var desc = new ActionDescriptor();
    var ref = new ActionReference();

    ref.putEnumerated(
        charIDToTypeID("AdjL"),
        charIDToTypeID("Ordn"),
        charIDToTypeID("Trgt")
    );

    desc.putReference(charIDToTypeID("null"), ref);

    var toDesc = new ActionDescriptor();

    var list = new ActionList();
    var colorDesc = new ActionDescriptor();

    colorDesc.putEnumerated(
        charIDToTypeID("Clrs"),
        charIDToTypeID("Clrs"),
        charIDToTypeID(colorRange)
    );

    for (var key in values) {

        if (values[key] != null) {

            colorDesc.putUnitDouble(
                charIDToTypeID(key),
                charIDToTypeID("#Prc"),
                values[key]
            );

        }
    }

    list.putObject(charIDToTypeID("ClrC"), colorDesc);

    toDesc.putList(charIDToTypeID("ClrC"), list);

    desc.putObject(
        charIDToTypeID("T   "),
        charIDToTypeID("SlcC"),
        toDesc
    );

    executeAction(
        charIDToTypeID("setd"),
        desc,
        DialogModes.NO
    );
}


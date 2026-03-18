#target photoshop

main();

function main(){

    if(app.documents.length == 0){
        alert("No document open");
        return;
    }

    var doc = app.activeDocument;
    var layer = doc.activeLayer;

    if(doc.pathItems.length == 0){
        alert("No path found");
        return;
    }

    var pathItem = doc.pathItems.getByName("Work Path");
    alert(pathItem)
    var pathPoints = pathItem.subPathItems[0].pathPoints;
    alert(pathPoints[1].anchor[0])

    if(pathPoints.length != 4){
        alert("Path must have 4 points");
        return;
    }

    var quad = [];

    for(var i=0;i<4;i++){
        quad.push({
            x: pathPoints[i].anchor[0],
            y: pathPoints[i].anchor[1]
        });
    }

    transformLayer(layer, quad);
}


function transformLayer(layer, quad){

    var b = layer.bounds;

    var left = b[0].as("px");
    var top = b[1].as("px");
    var right = b[2].as("px");
    var bottom = b[3].as("px");

    var idTrnf = charIDToTypeID("Trnf");
    var desc = new ActionDescriptor();
    var ref = new ActionReference();

    ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    desc.putReference(charIDToTypeID("null"), ref);

    desc.putUnitDouble(charIDToTypeID("FTcs"), charIDToTypeID("#Pxl"), 0);

    var quadList = new ActionList();

    for(var i=0;i<4;i++){

        var pt = new ActionDescriptor();

        pt.putUnitDouble(charIDToTypeID("Hrzn"), charIDToTypeID("#Pxl"), quad[i].x);
        pt.putUnitDouble(charIDToTypeID("Vrtc"), charIDToTypeID("#Pxl"), quad[i].y);

        quadList.putObject(charIDToTypeID("Pnt "), pt);
    }

    desc.putList(charIDToTypeID("Qdrt"), quadList);

    executeAction(idTrnf, desc, DialogModes.NO);
}
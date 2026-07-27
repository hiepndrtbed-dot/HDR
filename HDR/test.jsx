//add mask
function addMaskGroup() {
var idMk = charIDToTypeID( "Mk  " );
    var desc199659 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
    var idChnl = charIDToTypeID( "Chnl" );
    desc199659.putClass( idNw, idChnl );
    var idAt = charIDToTypeID( "At  " );
        var ref3943 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idChnl = charIDToTypeID( "Chnl" );
        var idMsk = charIDToTypeID( "Msk " );
        ref3943.putEnumerated( idChnl, idChnl, idMsk );
    desc199659.putReference( idAt, ref3943 );
    var idUsng = charIDToTypeID( "Usng" );
    var idUsrM = charIDToTypeID( "UsrM" );
    var idRvlA = charIDToTypeID( "RvlA" );
    desc199659.putEnumerated( idUsng, idUsrM, idRvlA );
executeAction( idMk, desc199659, DialogModes.NO );
}
addMask();
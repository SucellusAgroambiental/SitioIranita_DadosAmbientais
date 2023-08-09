var size = 0;
var placement = 'point';
function categories_Hidrografia_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Centerline':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,197,92,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego Cachoeira':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(48,224,142,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego Caete':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,27,240,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego Capanema':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,13,216,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego Capivara':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(131,209,223,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego Chapadao':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(166,237,112,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego Confuso':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(122,207,194,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego da Rocinha':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,198,138,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego do Nicanor':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,161,131,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego do Ouro':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(185,104,215,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego do Tesouro':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(106,21,224,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego Elefantina':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(37,73,204,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego Farradura':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,207,78,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corrego Malacacheta':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(217,94,133,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ribeirao Arataca':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,108,108,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ribeirao Bom Sucesso ou do Ceu':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(103,230,86,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ribeirao da Perdicao':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,66,164,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ribeirao Sao Sebastiao':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(108,201,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Hidrografia_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("nome_dre");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Hidrografia_8(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};

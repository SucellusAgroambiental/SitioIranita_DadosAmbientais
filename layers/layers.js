var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Salgada_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Salgada",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Salgada_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4671942.402563, -2383714.329812, -4671652.636145, -2383403.047499]
                            })
                        });
var lyr_Aude_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Açude",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Aude_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4671133.160647, -2383628.577459, -4670777.740410, -2383318.236459]
                            })
                        });
var lyr_Sede_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sede",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sede_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4670902.916524, -2384308.112015, -4670292.454138, -2383721.271149]
                            })
                        });
var format_LimiteStioIranita_4 = new ol.format.GeoJSON();
var features_LimiteStioIranita_4 = format_LimiteStioIranita_4.readFeatures(json_LimiteStioIranita_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteStioIranita_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteStioIranita_4.addFeatures(features_LimiteStioIranita_4);
var lyr_LimiteStioIranita_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteStioIranita_4, 
                style: style_LimiteStioIranita_4,
                interactive: true,
                title: '<img src="styles/legend/LimiteStioIranita_4.png" /> Limite Sítio Iranita'
            });
var format_TalhesProdutivos_5 = new ol.format.GeoJSON();
var features_TalhesProdutivos_5 = format_TalhesProdutivos_5.readFeatures(json_TalhesProdutivos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TalhesProdutivos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalhesProdutivos_5.addFeatures(features_TalhesProdutivos_5);
var lyr_TalhesProdutivos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TalhesProdutivos_5, 
                style: style_TalhesProdutivos_5,
                interactive: true,
    title: 'Talhões Produtivos<br />\
    <img src="styles/legend/TalhesProdutivos_5_0.png" /> T01<br />\
    <img src="styles/legend/TalhesProdutivos_5_1.png" /> T02<br />\
    <img src="styles/legend/TalhesProdutivos_5_2.png" /> T03<br />\
    <img src="styles/legend/TalhesProdutivos_5_3.png" /> T04<br />\
    <img src="styles/legend/TalhesProdutivos_5_4.png" /> T05<br />\
    <img src="styles/legend/TalhesProdutivos_5_5.png" /> T07<br />\
    <img src="styles/legend/TalhesProdutivos_5_6.png" /> T08<br />\
    <img src="styles/legend/TalhesProdutivos_5_7.png" /> T09<br />\
    <img src="styles/legend/TalhesProdutivos_5_8.png" /> T10<br />\
    <img src="styles/legend/TalhesProdutivos_5_9.png" /> T11<br />'
        });
var format_UsoeOcupaoGeral_6 = new ol.format.GeoJSON();
var features_UsoeOcupaoGeral_6 = format_UsoeOcupaoGeral_6.readFeatures(json_UsoeOcupaoGeral_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsoeOcupaoGeral_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsoeOcupaoGeral_6.addFeatures(features_UsoeOcupaoGeral_6);
var lyr_UsoeOcupaoGeral_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UsoeOcupaoGeral_6, 
                style: style_UsoeOcupaoGeral_6,
                interactive: true,
    title: 'Uso e Ocupação - Geral<br />\
    <img src="styles/legend/UsoeOcupaoGeral_6_0.png" /> CAMPO / PASTAGEM<br />\
    <img src="styles/legend/UsoeOcupaoGeral_6_1.png" /> URBANO<br />\
    <img src="styles/legend/UsoeOcupaoGeral_6_2.png" /> VEGETACAO SECUNDARIA EM ESTAGIO INICIAL<br />\
    <img src="styles/legend/UsoeOcupaoGeral_6_3.png" /> VEGETACAO SECUNDARIA EM ESTAGIO MEDIO / AVANCADO<br />'
        });
var format_CurvasdeNvel_7 = new ol.format.GeoJSON();
var features_CurvasdeNvel_7 = format_CurvasdeNvel_7.readFeatures(json_CurvasdeNvel_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvasdeNvel_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasdeNvel_7.addFeatures(features_CurvasdeNvel_7);
var lyr_CurvasdeNvel_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CurvasdeNvel_7, 
                style: style_CurvasdeNvel_7,
                interactive: true,
                title: '<img src="styles/legend/CurvasdeNvel_7.png" /> Curvas de Nível'
            });
var format_Nascentes_8 = new ol.format.GeoJSON();
var features_Nascentes_8 = format_Nascentes_8.readFeatures(json_Nascentes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nascentes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes_8.addFeatures(features_Nascentes_8);
var lyr_Nascentes_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nascentes_8, 
                style: style_Nascentes_8,
                interactive: true,
                title: '<img src="styles/legend/Nascentes_8.png" /> Nascentes'
            });
var group_Ortofotos = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_Salgada_1,lyr_Aude_2,lyr_Sede_3,],
                                title: "Ortofotos"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Salgada_1.setVisible(true);lyr_Aude_2.setVisible(true);lyr_Sede_3.setVisible(true);lyr_LimiteStioIranita_4.setVisible(true);lyr_TalhesProdutivos_5.setVisible(true);lyr_UsoeOcupaoGeral_6.setVisible(false);lyr_CurvasdeNvel_7.setVisible(false);lyr_Nascentes_8.setVisible(false);
var layersList = [group_Ortofotos,lyr_LimiteStioIranita_4,lyr_TalhesProdutivos_5,lyr_UsoeOcupaoGeral_6,lyr_CurvasdeNvel_7,lyr_Nascentes_8];
lyr_LimiteStioIranita_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area_ha': 'Area_ha', });
lyr_TalhesProdutivos_5.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_UsoeOcupaoGeral_6.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'class_name': 'class_name', 'perimet_km': 'perimet_km', 'area_ha': 'area_ha', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', });
lyr_CurvasdeNvel_7.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'id_objeto': 'id_objeto', 'cota': 'cota', 'depressao': 'depressao', 'geometriaa': 'geometriaa', 'indice': 'indice', 'shape_leng': 'shape_leng', });
lyr_Nascentes_8.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'nome': 'nome', 'perimet_km': 'perimet_km', 'area_ha': 'area_ha', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', });
lyr_LimiteStioIranita_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_TalhesProdutivos_5.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_UsoeOcupaoGeral_6.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'class_name': 'TextEdit', 'perimet_km': 'TextEdit', 'area_ha': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_CurvasdeNvel_7.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'id_objeto': 'TextEdit', 'cota': 'TextEdit', 'depressao': 'TextEdit', 'geometriaa': 'TextEdit', 'indice': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Nascentes_8.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'nome': 'TextEdit', 'perimet_km': 'TextEdit', 'area_ha': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_LimiteStioIranita_4.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Area_ha': 'inline label', });
lyr_TalhesProdutivos_5.set('fieldLabels', {'fid': 'no label', 'Talhão': 'no label', 'Localizaç': 'no label', 'Área (m)': 'no label', 'Área (ha)': 'no label', 'Perimetro ': 'no label', 'Variedade': 'no label', 'Ano de Pla': 'no label', 'Altitude M': 'no label', 'Altitude M_1': 'no label', ' Diferenç': 'no label', 'N Linhas': 'no label', 'N Falhas': 'no label', });
lyr_UsoeOcupaoGeral_6.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'class_name': 'no label', 'perimet_km': 'no label', 'area_ha': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', });
lyr_CurvasdeNvel_7.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'id_objeto': 'no label', 'cota': 'inline label', 'depressao': 'no label', 'geometriaa': 'no label', 'indice': 'no label', 'shape_leng': 'no label', });
lyr_Nascentes_8.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'nome': 'no label', 'perimet_km': 'no label', 'area_ha': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', });
lyr_Nascentes_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
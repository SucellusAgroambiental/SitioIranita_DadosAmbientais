var wms_layers = [];

var lyr_Salgada_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Salgada",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Salgada_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4671942.402563, -2383714.329812, -4671652.636145, -2383403.047499]
                            })
                        });
var lyr_Aude_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Açude",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Aude_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4671133.160647, -2383628.577459, -4670777.740410, -2383318.236459]
                            })
                        });
var lyr_Sede_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sede",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sede_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4670902.916524, -2384308.112015, -4670292.454138, -2383721.271149]
                            })
                        });
var format_TalhesProdutivos_3 = new ol.format.GeoJSON();
var features_TalhesProdutivos_3 = format_TalhesProdutivos_3.readFeatures(json_TalhesProdutivos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TalhesProdutivos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalhesProdutivos_3.addFeatures(features_TalhesProdutivos_3);
var lyr_TalhesProdutivos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TalhesProdutivos_3, 
                style: style_TalhesProdutivos_3,
                interactive: true,
    title: 'Talhões Produtivos<br />\
    <img src="styles/legend/TalhesProdutivos_3_0.png" /> T01<br />\
    <img src="styles/legend/TalhesProdutivos_3_1.png" /> T02<br />\
    <img src="styles/legend/TalhesProdutivos_3_2.png" /> T03<br />\
    <img src="styles/legend/TalhesProdutivos_3_3.png" /> T04<br />\
    <img src="styles/legend/TalhesProdutivos_3_4.png" /> T05<br />\
    <img src="styles/legend/TalhesProdutivos_3_5.png" /> T07<br />\
    <img src="styles/legend/TalhesProdutivos_3_6.png" /> T08<br />\
    <img src="styles/legend/TalhesProdutivos_3_7.png" /> T09<br />\
    <img src="styles/legend/TalhesProdutivos_3_8.png" /> T10<br />\
    <img src="styles/legend/TalhesProdutivos_3_9.png" /> T11<br />'
        });
var format_CurvasdeNvel_4 = new ol.format.GeoJSON();
var features_CurvasdeNvel_4 = format_CurvasdeNvel_4.readFeatures(json_CurvasdeNvel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvasdeNvel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasdeNvel_4.addFeatures(features_CurvasdeNvel_4);
var lyr_CurvasdeNvel_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CurvasdeNvel_4, 
                style: style_CurvasdeNvel_4,
                interactive: true,
                title: '<img src="styles/legend/CurvasdeNvel_4.png" /> Curvas de Nível'
            });
var format_Nascentes_5 = new ol.format.GeoJSON();
var features_Nascentes_5 = format_Nascentes_5.readFeatures(json_Nascentes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nascentes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes_5.addFeatures(features_Nascentes_5);
var lyr_Nascentes_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nascentes_5, 
                style: style_Nascentes_5,
                interactive: true,
                title: '<img src="styles/legend/Nascentes_5.png" /> Nascentes'
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
var format_LimiteStioIranita_7 = new ol.format.GeoJSON();
var features_LimiteStioIranita_7 = format_LimiteStioIranita_7.readFeatures(json_LimiteStioIranita_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteStioIranita_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteStioIranita_7.addFeatures(features_LimiteStioIranita_7);
var lyr_LimiteStioIranita_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteStioIranita_7, 
                style: style_LimiteStioIranita_7,
                interactive: true,
                title: '<img src="styles/legend/LimiteStioIranita_7.png" /> Limite Sítio Iranita'
            });
var format_Hidrografia_8 = new ol.format.GeoJSON();
var features_Hidrografia_8 = format_Hidrografia_8.readFeatures(json_Hidrografia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografia_8.addFeatures(features_Hidrografia_8);
var lyr_Hidrografia_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hidrografia_8, 
                style: style_Hidrografia_8,
                interactive: true,
    title: 'Hidrografia<br />\
    <img src="styles/legend/Hidrografia_8_0.png" /> Centerline<br />\
    <img src="styles/legend/Hidrografia_8_1.png" /> Corrego Cachoeira<br />\
    <img src="styles/legend/Hidrografia_8_2.png" /> Corrego Caete<br />\
    <img src="styles/legend/Hidrografia_8_3.png" /> Corrego Capanema<br />\
    <img src="styles/legend/Hidrografia_8_4.png" /> Corrego Capivara<br />\
    <img src="styles/legend/Hidrografia_8_5.png" /> Corrego Chapadao<br />\
    <img src="styles/legend/Hidrografia_8_6.png" /> Corrego Confuso<br />\
    <img src="styles/legend/Hidrografia_8_7.png" /> Corrego da Rocinha<br />\
    <img src="styles/legend/Hidrografia_8_8.png" /> Corrego do Nicanor<br />\
    <img src="styles/legend/Hidrografia_8_9.png" /> Corrego do Ouro<br />\
    <img src="styles/legend/Hidrografia_8_10.png" /> Corrego do Tesouro<br />\
    <img src="styles/legend/Hidrografia_8_11.png" /> Corrego Elefantina<br />\
    <img src="styles/legend/Hidrografia_8_12.png" /> Corrego Farradura<br />\
    <img src="styles/legend/Hidrografia_8_13.png" /> Corrego Malacacheta<br />\
    <img src="styles/legend/Hidrografia_8_14.png" /> Ribeirao Arataca<br />\
    <img src="styles/legend/Hidrografia_8_15.png" /> Ribeirao Bom Sucesso ou do Ceu<br />\
    <img src="styles/legend/Hidrografia_8_16.png" /> Ribeirao da Perdicao<br />\
    <img src="styles/legend/Hidrografia_8_17.png" /> Ribeirao Sao Sebastiao<br />'
        });
var group_Ortofotos = new ol.layer.Group({
                                layers: [lyr_Salgada_0,lyr_Aude_1,lyr_Sede_2,],
                                title: "Ortofotos"});

lyr_Salgada_0.setVisible(true);lyr_Aude_1.setVisible(true);lyr_Sede_2.setVisible(true);lyr_TalhesProdutivos_3.setVisible(true);lyr_CurvasdeNvel_4.setVisible(false);lyr_Nascentes_5.setVisible(false);lyr_UsoeOcupaoGeral_6.setVisible(false);lyr_LimiteStioIranita_7.setVisible(true);lyr_Hidrografia_8.setVisible(false);
var layersList = [group_Ortofotos,lyr_TalhesProdutivos_3,lyr_CurvasdeNvel_4,lyr_Nascentes_5,lyr_UsoeOcupaoGeral_6,lyr_LimiteStioIranita_7,lyr_Hidrografia_8];
lyr_TalhesProdutivos_3.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_CurvasdeNvel_4.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'id_objeto': 'id_objeto', 'cota': 'cota', 'depressao': 'depressao', 'geometriaa': 'geometriaa', 'indice': 'indice', 'shape_leng': 'shape_leng', });
lyr_Nascentes_5.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'nome': 'nome', 'perimet_km': 'perimet_km', 'area_ha': 'area_ha', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', });
lyr_UsoeOcupaoGeral_6.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'class_name': 'class_name', 'perimet_km': 'perimet_km', 'area_ha': 'area_ha', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', });
lyr_LimiteStioIranita_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area_ha': 'Area_ha', });
lyr_Hidrografia_8.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'classe_dre': 'classe_dre', 'nome_dre': 'nome_dre', 'bacia_dr': 'bacia_dr', 'ordem': 'ordem', 'layer': 'layer', 'nome_bacia': 'nome_bacia', 'gd_bacias': 'gd_bacias', 'obs': 'obs', 'length': 'length', 'fid_': 'fid_', 'problemas': 'problemas', 'level': 'level', 'linetype': 'linetype', 'shape_leng': 'shape_leng', });
lyr_TalhesProdutivos_3.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_CurvasdeNvel_4.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'id_objeto': 'TextEdit', 'cota': 'TextEdit', 'depressao': 'TextEdit', 'geometriaa': 'TextEdit', 'indice': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Nascentes_5.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'nome': 'TextEdit', 'perimet_km': 'TextEdit', 'area_ha': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_UsoeOcupaoGeral_6.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'class_name': 'TextEdit', 'perimet_km': 'TextEdit', 'area_ha': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_LimiteStioIranita_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_Hidrografia_8.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'classe_dre': 'TextEdit', 'nome_dre': 'TextEdit', 'bacia_dr': 'TextEdit', 'ordem': 'Range', 'layer': 'TextEdit', 'nome_bacia': 'TextEdit', 'gd_bacias': 'TextEdit', 'obs': 'TextEdit', 'length': 'TextEdit', 'fid_': 'TextEdit', 'problemas': 'TextEdit', 'level': 'TextEdit', 'linetype': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_TalhesProdutivos_3.set('fieldLabels', {'fid': 'no label', 'Talhão': 'no label', 'Localizaç': 'no label', 'Área (m)': 'no label', 'Área (ha)': 'no label', 'Perimetro ': 'no label', 'Variedade': 'no label', 'Ano de Pla': 'no label', 'Altitude M': 'no label', 'Altitude M_1': 'no label', ' Diferenç': 'no label', 'N Linhas': 'no label', 'N Falhas': 'no label', });
lyr_CurvasdeNvel_4.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'id_objeto': 'no label', 'cota': 'inline label', 'depressao': 'no label', 'geometriaa': 'no label', 'indice': 'no label', 'shape_leng': 'no label', });
lyr_Nascentes_5.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'nome': 'no label', 'perimet_km': 'no label', 'area_ha': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', });
lyr_UsoeOcupaoGeral_6.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'class_name': 'no label', 'perimet_km': 'no label', 'area_ha': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', });
lyr_LimiteStioIranita_7.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Area_ha': 'inline label', });
lyr_Hidrografia_8.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'classe_dre': 'no label', 'nome_dre': 'no label', 'bacia_dr': 'no label', 'ordem': 'no label', 'layer': 'no label', 'nome_bacia': 'no label', 'gd_bacias': 'no label', 'obs': 'no label', 'length': 'no label', 'fid_': 'no label', 'problemas': 'no label', 'level': 'no label', 'linetype': 'no label', 'shape_leng': 'no label', });
lyr_Hidrografia_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
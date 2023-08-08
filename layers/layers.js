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
var format_SALGADA_3 = new ol.format.GeoJSON();
var features_SALGADA_3 = format_SALGADA_3.readFeatures(json_SALGADA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALGADA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALGADA_3.addFeatures(features_SALGADA_3);
var lyr_SALGADA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SALGADA_3, 
                style: style_SALGADA_3,
                interactive: true,
                title: '<img src="styles/legend/SALGADA_3.png" /> SALGADA'
            });
var format_AUDE_4 = new ol.format.GeoJSON();
var features_AUDE_4 = format_AUDE_4.readFeatures(json_AUDE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUDE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUDE_4.addFeatures(features_AUDE_4);
var lyr_AUDE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AUDE_4, 
                style: style_AUDE_4,
                interactive: true,
                title: '<img src="styles/legend/AUDE_4.png" /> AÇUDE'
            });
var format_SEDE_5 = new ol.format.GeoJSON();
var features_SEDE_5 = format_SEDE_5.readFeatures(json_SEDE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEDE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEDE_5.addFeatures(features_SEDE_5);
var lyr_SEDE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEDE_5, 
                style: style_SEDE_5,
                interactive: true,
                title: '<img src="styles/legend/SEDE_5.png" /> SEDE'
            });
var format_SALGADA_6 = new ol.format.GeoJSON();
var features_SALGADA_6 = format_SALGADA_6.readFeatures(json_SALGADA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALGADA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALGADA_6.addFeatures(features_SALGADA_6);
var lyr_SALGADA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SALGADA_6, 
                style: style_SALGADA_6,
                interactive: true,
                title: '<img src="styles/legend/SALGADA_6.png" /> SALGADA'
            });
var format_AUDE_7 = new ol.format.GeoJSON();
var features_AUDE_7 = format_AUDE_7.readFeatures(json_AUDE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUDE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUDE_7.addFeatures(features_AUDE_7);
var lyr_AUDE_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AUDE_7, 
                style: style_AUDE_7,
                interactive: true,
                title: '<img src="styles/legend/AUDE_7.png" /> AÇUDE'
            });
var format_SEDE_8 = new ol.format.GeoJSON();
var features_SEDE_8 = format_SEDE_8.readFeatures(json_SEDE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEDE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEDE_8.addFeatures(features_SEDE_8);
var lyr_SEDE_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEDE_8, 
                style: style_SEDE_8,
                interactive: true,
                title: '<img src="styles/legend/SEDE_8.png" /> SEDE'
            });
var format_NmerodeFalhasdePalntio_9 = new ol.format.GeoJSON();
var features_NmerodeFalhasdePalntio_9 = format_NmerodeFalhasdePalntio_9.readFeatures(json_NmerodeFalhasdePalntio_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeFalhasdePalntio_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NmerodeFalhasdePalntio_9.addFeatures(features_NmerodeFalhasdePalntio_9);
var lyr_NmerodeFalhasdePalntio_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeFalhasdePalntio_9, 
                style: style_NmerodeFalhasdePalntio_9,
                interactive: true,
    title: 'Número de Falhas de Palntio<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_9_0.png" /> 2<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_9_1.png" /> 8<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_9_2.png" /> 24<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_9_3.png" /> 31<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_9_4.png" /> 75<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_9_5.png" /> 88<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_9_6.png" /> 319<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_9_7.png" /> 346<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_9_8.png" /> 367<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_9_9.png" /> 424<br />'
        });
var format_NmerodeLinhasdePlantio_10 = new ol.format.GeoJSON();
var features_NmerodeLinhasdePlantio_10 = format_NmerodeLinhasdePlantio_10.readFeatures(json_NmerodeLinhasdePlantio_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeLinhasdePlantio_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NmerodeLinhasdePlantio_10.addFeatures(features_NmerodeLinhasdePlantio_10);
var lyr_NmerodeLinhasdePlantio_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeLinhasdePlantio_10, 
                style: style_NmerodeLinhasdePlantio_10,
                interactive: true,
    title: 'Número de Linhas de Plantio<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_10_0.png" /> 22<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_10_1.png" /> 27<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_10_2.png" /> 31<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_10_3.png" /> 33<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_10_4.png" /> 46<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_10_5.png" /> 47<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_10_6.png" /> 48<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_10_7.png" /> 59<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_10_8.png" /> 65<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_10_9.png" /> 72<br />'
        });
var format_AnodePlantio_11 = new ol.format.GeoJSON();
var features_AnodePlantio_11 = format_AnodePlantio_11.readFeatures(json_AnodePlantio_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnodePlantio_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnodePlantio_11.addFeatures(features_AnodePlantio_11);
var lyr_AnodePlantio_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnodePlantio_11, 
                style: style_AnodePlantio_11,
                interactive: true,
    title: 'Ano de Plantio<br />\
    <img src="styles/legend/AnodePlantio_11_0.png" /> 1995<br />\
    <img src="styles/legend/AnodePlantio_11_1.png" /> 2019<br />\
    <img src="styles/legend/AnodePlantio_11_2.png" /> 2019/2020<br />\
    <img src="styles/legend/AnodePlantio_11_3.png" /> 2020<br />'
        });
var format_Variedades_12 = new ol.format.GeoJSON();
var features_Variedades_12 = format_Variedades_12.readFeatures(json_Variedades_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Variedades_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Variedades_12.addFeatures(features_Variedades_12);
var lyr_Variedades_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Variedades_12, 
                style: style_Variedades_12,
                interactive: true,
    title: 'Variedades<br />\
    <img src="styles/legend/Variedades_12_0.png" /> 785-15 Verm.<br />\
    <img src="styles/legend/Variedades_12_1.png" /> Arara<br />\
    <img src="styles/legend/Variedades_12_2.png" /> Arara e Japy<br />\
    <img src="styles/legend/Variedades_12_3.png" /> Catuai<br />\
    <img src="styles/legend/Variedades_12_4.png" /> Mundo Novo<br />'
        });
var format_reaha_13 = new ol.format.GeoJSON();
var features_reaha_13 = format_reaha_13.readFeatures(json_reaha_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaha_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaha_13.addFeatures(features_reaha_13);
var lyr_reaha_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaha_13, 
                style: style_reaha_13,
                interactive: true,
    title: 'Área ha<br />\
    <img src="styles/legend/reaha_13_0.png" /> 0,28<br />\
    <img src="styles/legend/reaha_13_1.png" /> 0,286<br />\
    <img src="styles/legend/reaha_13_2.png" /> 0,407<br />\
    <img src="styles/legend/reaha_13_3.png" /> 0,607<br />\
    <img src="styles/legend/reaha_13_4.png" /> 0,832<br />\
    <img src="styles/legend/reaha_13_5.png" /> 0,84<br />\
    <img src="styles/legend/reaha_13_6.png" /> 0,899<br />\
    <img src="styles/legend/reaha_13_7.png" /> 1,032<br />\
    <img src="styles/legend/reaha_13_8.png" /> 1,110<br />\
    <img src="styles/legend/reaha_13_9.png" /> 1,867<br />'
        });
var format_TalhesProdutivos_14 = new ol.format.GeoJSON();
var features_TalhesProdutivos_14 = format_TalhesProdutivos_14.readFeatures(json_TalhesProdutivos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TalhesProdutivos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalhesProdutivos_14.addFeatures(features_TalhesProdutivos_14);
var lyr_TalhesProdutivos_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TalhesProdutivos_14, 
                style: style_TalhesProdutivos_14,
                interactive: true,
    title: 'Talhões Produtivos<br />\
    <img src="styles/legend/TalhesProdutivos_14_0.png" /> T01<br />\
    <img src="styles/legend/TalhesProdutivos_14_1.png" /> T02<br />\
    <img src="styles/legend/TalhesProdutivos_14_2.png" /> T03<br />\
    <img src="styles/legend/TalhesProdutivos_14_3.png" /> T04<br />\
    <img src="styles/legend/TalhesProdutivos_14_4.png" /> T05<br />\
    <img src="styles/legend/TalhesProdutivos_14_5.png" /> T07<br />\
    <img src="styles/legend/TalhesProdutivos_14_6.png" /> T08<br />\
    <img src="styles/legend/TalhesProdutivos_14_7.png" /> T09<br />\
    <img src="styles/legend/TalhesProdutivos_14_8.png" /> T10<br />\
    <img src="styles/legend/TalhesProdutivos_14_9.png" /> T11<br />'
        });
var format_LimiteStioIranita_15 = new ol.format.GeoJSON();
var features_LimiteStioIranita_15 = format_LimiteStioIranita_15.readFeatures(json_LimiteStioIranita_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteStioIranita_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteStioIranita_15.addFeatures(features_LimiteStioIranita_15);
var lyr_LimiteStioIranita_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteStioIranita_15, 
                style: style_LimiteStioIranita_15,
                interactive: true,
                title: '<img src="styles/legend/LimiteStioIranita_15.png" /> Limite Sítio Iranita'
            });
var group_reasProdutivas = new ol.layer.Group({
                                layers: [lyr_NmerodeFalhasdePalntio_9,lyr_NmerodeLinhasdePlantio_10,lyr_AnodePlantio_11,lyr_Variedades_12,lyr_reaha_13,lyr_TalhesProdutivos_14,],
                                title: "Áreas Produtivas"});
var group_LinhasdePlantio = new ol.layer.Group({
                                layers: [lyr_SALGADA_6,lyr_AUDE_7,lyr_SEDE_8,],
                                title: "Linhas de Plantio"});
var group_FalhasdePlantio = new ol.layer.Group({
                                layers: [lyr_SALGADA_3,lyr_AUDE_4,lyr_SEDE_5,],
                                title: "Falhas de Plantio"});
var group_Ortofotos = new ol.layer.Group({
                                layers: [lyr_Salgada_0,lyr_Aude_1,lyr_Sede_2,],
                                title: "Ortofotos"});

lyr_Salgada_0.setVisible(true);lyr_Aude_1.setVisible(true);lyr_Sede_2.setVisible(true);lyr_SALGADA_3.setVisible(false);lyr_AUDE_4.setVisible(false);lyr_SEDE_5.setVisible(false);lyr_SALGADA_6.setVisible(false);lyr_AUDE_7.setVisible(false);lyr_SEDE_8.setVisible(false);lyr_NmerodeFalhasdePalntio_9.setVisible(true);lyr_NmerodeLinhasdePlantio_10.setVisible(true);lyr_AnodePlantio_11.setVisible(true);lyr_Variedades_12.setVisible(true);lyr_reaha_13.setVisible(true);lyr_TalhesProdutivos_14.setVisible(true);lyr_LimiteStioIranita_15.setVisible(true);
var layersList = [group_Ortofotos,group_FalhasdePlantio,group_LinhasdePlantio,group_reasProdutivas,lyr_LimiteStioIranita_15];
lyr_SALGADA_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'falha': 'falha', 'linha': 'linha', 'talhão': 'talhão', 'compri': 'compri', });
lyr_AUDE_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Falha': 'Falha', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_SEDE_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Falha': 'Falha', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_SALGADA_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_AUDE_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_SEDE_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'linha': 'linha', 'talhões': 'talhões', 'medida': 'medida', });
lyr_NmerodeFalhasdePalntio_9.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_NmerodeLinhasdePlantio_10.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_AnodePlantio_11.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_Variedades_12.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_reaha_13.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_TalhesProdutivos_14.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_LimiteStioIranita_15.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area_ha': 'Area_ha', });
lyr_SALGADA_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'falha': 'TextEdit', 'linha': 'TextEdit', 'talhão': 'TextEdit', 'compri': 'TextEdit', });
lyr_AUDE_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Falha': 'TextEdit', 'Linha': 'TextEdit', 'Talhão': 'TextEdit', 'Comprimento (m)': 'TextEdit', });
lyr_SEDE_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Falha': 'TextEdit', 'Linha': 'TextEdit', 'Talhão': 'TextEdit', 'Comprimento (m)': 'TextEdit', });
lyr_SALGADA_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Linha': '', 'Talhão': '', 'Comprimento (m)': '', });
lyr_AUDE_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Linha': '', 'Talhão': '', 'Comprimento (m)': 'TextEdit', });
lyr_SEDE_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'linha': '', 'talhões': '', 'medida': '', });
lyr_NmerodeFalhasdePalntio_9.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_NmerodeLinhasdePlantio_10.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_AnodePlantio_11.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_Variedades_12.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_reaha_13.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_TalhesProdutivos_14.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_LimiteStioIranita_15.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_SALGADA_3.set('fieldLabels', {});
lyr_AUDE_4.set('fieldLabels', {});
lyr_SEDE_5.set('fieldLabels', {});
lyr_SALGADA_6.set('fieldLabels', {});
lyr_AUDE_7.set('fieldLabels', {});
lyr_SEDE_8.set('fieldLabels', {});
lyr_NmerodeFalhasdePalntio_9.set('fieldLabels', {});
lyr_NmerodeLinhasdePlantio_10.set('fieldLabels', {});
lyr_AnodePlantio_11.set('fieldLabels', {});
lyr_Variedades_12.set('fieldLabels', {});
lyr_reaha_13.set('fieldLabels', {});
lyr_TalhesProdutivos_14.set('fieldLabels', {});
lyr_LimiteStioIranita_15.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Area_ha': 'inline label', });
lyr_LimiteStioIranita_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
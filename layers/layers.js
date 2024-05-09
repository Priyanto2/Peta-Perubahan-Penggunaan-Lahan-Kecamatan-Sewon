var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_PETAPERUBAHANLAKANPER_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "PETAPERUBAHANLAKANPER",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PETAPERUBAHANLAKANPER_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12282215.862378, -876445.499658, 12283315.733934, -874021.210158]
                            })
                        });
var format_UNSUR_2 = new ol.format.GeoJSON();
var features_UNSUR_2 = format_UNSUR_2.readFeatures(json_UNSUR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNSUR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNSUR_2.addFeatures(features_UNSUR_2);
var lyr_UNSUR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UNSUR_2, 
                style: style_UNSUR_2,
                popuplayertitle: "UNSUR",
                interactive: true,
    title: 'UNSUR<br />\
    <img src="styles/legend/UNSUR_2_0.png" /> Bangunan<br />\
    <img src="styles/legend/UNSUR_2_1.png" /> Campuran<br />\
    <img src="styles/legend/UNSUR_2_2.png" /> Jalan<br />\
    <img src="styles/legend/UNSUR_2_3.png" /> Pertanian<br />\
    <img src="styles/legend/UNSUR_2_4.png" /> Pertanian ----> Bangunan<br />\
    <img src="styles/legend/UNSUR_2_5.png" /> Pertanian ----> Campuran<br />\
    <img src="styles/legend/UNSUR_2_6.png" /> Sungai<br />\
    <img src="styles/legend/UNSUR_2_7.png" /> <br />'
        });
var format_KELAS_3 = new ol.format.GeoJSON();
var features_KELAS_3 = format_KELAS_3.readFeatures(json_KELAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KELAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELAS_3.addFeatures(features_KELAS_3);
var lyr_KELAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KELAS_3, 
                style: style_KELAS_3,
                popuplayertitle: "KELAS",
                interactive: true,
    title: 'KELAS<br />\
    <img src="styles/legend/KELAS_3_0.png" /> <br />\
    <img src="styles/legend/KELAS_3_1.png" /> Fasilitas Kesehatan<br />\
    <img src="styles/legend/KELAS_3_2.png" /> Fasilitas Pendidikan<br />\
    <img src="styles/legend/KELAS_3_3.png" /> Fasilitas Sosial<br />\
    <img src="styles/legend/KELAS_3_4.png" /> Kantor Desa<br />\
    <img src="styles/legend/KELAS_3_5.png" /> Perkantoran<br />'
        });
var format_ADMINISTRASI_4 = new ol.format.GeoJSON();
var features_ADMINISTRASI_4 = format_ADMINISTRASI_4.readFeatures(json_ADMINISTRASI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_4.addFeatures(features_ADMINISTRASI_4);
var lyr_ADMINISTRASI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_4, 
                style: style_ADMINISTRASI_4,
                popuplayertitle: "ADMINISTRASI",
                interactive: true,
    title: 'ADMINISTRASI<br />\
    <img src="styles/legend/ADMINISTRASI_4_0.png" /> Batas Desa<br />\
    <img src="styles/legend/ADMINISTRASI_4_1.png" /> Batas Kabupaten<br />\
    <img src="styles/legend/ADMINISTRASI_4_2.png" /> Batas Kecamatan<br />\
    <img src="styles/legend/ADMINISTRASI_4_3.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_PETAPERUBAHANLAKANPER_1.setVisible(true);lyr_UNSUR_2.setVisible(true);lyr_KELAS_3.setVisible(true);lyr_ADMINISTRASI_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_PETAPERUBAHANLAKANPER_1,lyr_UNSUR_2,lyr_KELAS_3,lyr_ADMINISTRASI_4];
lyr_UNSUR_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UNSUR': 'UNSUR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KELAS_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Kelas': 'Kelas', });
lyr_ADMINISTRASI_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Atministra': 'Atministra', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_UNSUR_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'UNSUR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KELAS_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Kelas': 'TextEdit', });
lyr_ADMINISTRASI_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Atministra': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_UNSUR_2.set('fieldLabels', {'OBJECTID': 'no label', 'UNSUR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KELAS_3.set('fieldLabels', {'OBJECTID': 'no label', 'Kelas': 'no label', });
lyr_ADMINISTRASI_4.set('fieldLabels', {'OBJECTID': 'no label', 'Atministra': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ADMINISTRASI_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
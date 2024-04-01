ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([93.820708, -18.036398, 142.171245, 13.105508]);
var wms_layers = [];

var format_BatasProvinsi_0 = new ol.format.GeoJSON();
var features_BatasProvinsi_0 = format_BatasProvinsi_0.readFeatures(json_BatasProvinsi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasProvinsi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasProvinsi_0.addFeatures(features_BatasProvinsi_0);
var lyr_BatasProvinsi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasProvinsi_0, 
                style: style_BatasProvinsi_0,
                popuplayertitle: "Batas Provinsi",
                interactive: true,
    title: 'Batas Provinsi<br />\
    <img src="styles/legend/BatasProvinsi_0_0.png" /> dibawah IR rata rata nasional<br />\
    <img src="styles/legend/BatasProvinsi_0_1.png" /> diatas IR rata rata nasional<br />'
        });

lyr_BatasProvinsi_0.setVisible(true);
var layersList = [lyr_BatasProvinsi_0];
lyr_BatasProvinsi_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'IR DBD': 'IR DBD', });
lyr_BatasProvinsi_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'IR DBD': 'TextEdit', });
lyr_BatasProvinsi_0.set('fieldLabels', {'OBJECTID': 'no label', 'PROVINSI': 'header label - always visible', 'IR DBD': 'inline label - always visible', });
lyr_BatasProvinsi_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
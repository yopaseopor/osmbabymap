

/**
 * OSM Cat config
 */


var imgSrc = 'src/img/';

var config = {
	initialConfig: {
		lon: 1.59647,
		lat: 41.69689,
		rotation: 0, //in radians (positive rotation clockwise, 0 means North)
		zoom: 8,
		zoomGeolocation: 17,
		units: 'metric'
	},
	i18n: {
		layersLabel: 'Capas',
		completeWith: 'Completar con:',
		editWith: 'Editar con:',
		openWith: 'Abrir con:',
		showWith: 'Mostrar con:',
		show2With: 'Mostrar también con:',
		checkTools: 'Validar con:',
		copyDialog: 'S\'ha copiat l\'enllaç al porta-retalls.Enlace copiado. Link has been copied',
		nodeLabel: 'Nodo:',
		noNodesFound: 'No se ha encontrado información.',
		wayLabel: 'Vía:'
	},
	overpassApi: function(){
		// https://overpass-turbo.eu/
		var proxyOverpassApi = true;
		var overpassApi = 'https://overpass-api.de/api/interpreter';
		if (proxyOverpassApi)
		{
			overpassApi = 'https://overpass.kumi.systems/api/interpreter';
		}
		return overpassApi;
	},
	// Base layers
	layers: [
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			iconSrc: imgSrc + 'osm_logo-layer.svg',
			source: new ol.source.OSM()
		}),
		new ol.layer.Tile({
			title: 'OpenStreetMap DE',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			maxZoom: 18,
			source: new ol.source.XYZ({
				attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				url: 'https://{a-c}.tile.openstreetmap.de/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({// OpenStreetMap France https://openstreetmap.fr
			title: 'OpenStreetMap FR',
			iconSrc: imgSrc + 'osmfr_logo-layer.png',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
				url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenCycleMap',
			iconSrc: imgSrc + 'opencycle_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, powered by &copy; <a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>',
				url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Topotresc',
			iconSrc: imgSrc + 'topotresc_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data <a href="https://www.topotresc.com/" target="_blank">TopoTresk</a> by <a href="https://github.com/aresta/topotresc" target="_blank">aresta</a>',
				url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Dark Matter (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ES_IGN - PNOA - Actual',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'http://www.ign.es/wms-inspire/pnoa-ma?',
				params: {'LAYERS': 'OI.OrthoimageCoverage', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: 'ES_CAT_ICGC - Actual',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_mapesbase/wms/service?',
				params: {'LAYERS': 'orto25c', 'VERSION': '1.1.1'}
			}),
			visible: false

		}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=s&z={z}&x={x}&y={y}'
			}),
			visible: false
		})
	],
	/**
	* @type Array
	* Overlay
	* group: string nom del grup
	* title: string titol de la capa
	* query: string consulta tal como https://overpass-turbo.eu
	* iconSrc: string ruta de la imatge
	* style: function see https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html
	*/
	overlays: [



		
				
		
		{
			group: 'Baby feeding|Lactancia',
			title: 'Yes/Sí',
			query: '(nwr["baby_feeding"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Baby feeding|Lactancia',
			title: 'No',
			query: '(nwr["baby_feeding"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 206, 9, 9 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 206, 9, 9 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 206, 9, 9 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Baby feeding|Lactancia',
			title: 'Room<br>Habitación<br>Habitació',
			query: '(nwr["baby_feeding"="room"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(147, 229, 255,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(147, 229, 255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(147, 229, 255,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Baby feeding|Lactancia',
			title: 'Lactation<br>Lactància',
			query: '(nwr["baby_feeding"="lactation"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(202, 147, 255,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(202, 147, 255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(202, 147, 255,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Baby feeding|Lactancia',
			title: 'No info <b><a href="https://mapcomplete.osm.be/theme.html?userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fbabyfeeding.json&language=en#welcome">+ info</a></b>',
			query: '(nwr[amenity][!"baby_feeding"]({{bbox}});node(w);nwr[shop][!"baby_feeding"]({{bbox}});node(w);nwr[office][!"baby_feeding"]({{bbox}});node(w);nwr[tourism][!"baby_feeding"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 0, 0, 0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 0, 0, 0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 0, 0, 0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Baby feeding|Lactancia',
			title: 'check_date > 2020<br>Datos antes 2020<br>Dades abans 2020',
			query: '(nwr["baby_feeding"][~"^check_date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Baby feeding|Lactancia',
			title: '2020 < check_date<br>Datos después 2020<br>Dades després 2020',
			query: '(nwr["baby_feeding"][~"^check_date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Amenities|Servicios|Serveis',
			title: 'Kids area<br>Zona infantil',
			query: '(nwr["kids_area"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 37, 180, 2 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 37, 180, 2 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 37, 180, 2 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Amenities|Servicios|Serveis',
			title: 'No Kids area<br>No zona infantil',
			query: '(nwr["kids_area"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 202, 0, 0  ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 202, 0, 0  ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 202, 0, 0  ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Amenities|Servicios|Serveis',
			title: 'Indoor Kids area<br>Zona infantil interior',
			query: '(nwr["kids_area:indoor"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 175, 122, 197  ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 175, 122, 197  ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 175, 122, 197  ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Amenities|Servicios|Serveis',
			title: 'Outdoor Kids area<br>Zona infantil exterior',
			query: '(nwr["kids_area:outdoor"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 142, 68, 173  ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 142, 68, 173  ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 142, 68, 173  ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Amenities|Servicios|Serveis',
			title: 'Supervised Kids area<br>Zona infantil supervisada',
			query: '(nwr["kids_area:supervised"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 84, 153, 199 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(84, 153, 199 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(84, 153, 199 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Amenities|Servicios|Serveis',
			title: 'Kids area with fee<br>Zona infantil de pago<br>Zona infantil de pagament',
			query: '(nwr["kids_area:fee"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 72, 201, 176 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 72, 201, 176  ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 72, 201, 176  ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Amenities|Servicios|Serveis',
			title: 'Kids area ?<br>No info',
			query: '(nwr[amenity][!"kids_area"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Amenities|Servicios|Serveis',
			title: 'High chair<br>Trona',
			query: '(nwr[amenity]["highchair"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(22, 160, 133 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(22, 160, 133 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(22, 160, 133 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Amenities|Servicios|Serveis',
			title: 'No High chair<br>No trona',
			query: '(nwr[amenity]["highchair"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 202, 0, 0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 202, 0, 0  ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 202, 0, 0  ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Amenities|Servicios|Serveis',
			title: 'High chair ?<br>No info',
			query: '(nwr[amenity][!"highchair"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Amenities|Servicios|Serveis',
			title: 'Infant bed<br>cama infantil<br>llit infantil',
			query: '(nwr["infant_bed"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 82, 190, 128 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 82, 190, 128  ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 82, 190, 128  ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Amenities|Servicios|Serveis',
			title: 'Infant bed ?<br>No info',
			query: '(nwr["tourism"="guest_house"][!"infant_bed"]({{bbox}});node(w);nwr["tourism"="hotel"][!"infant_bed"]({{bbox}});node(w);nwr["tourism"="motel"][!"infant_bed"]({{bbox}});node(w);nwr["tourism"="camp_site"][!"infant_bed"]({{bbox}});node(w);nwr["tourism"="hostel"][!"infant_bed"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'Changing table<br>Cambiador<br>Canviador',
			query: '(nwr["changing_table"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 37, 180, 2  ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 37, 180, 2  ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 37, 180, 2  ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'No changing table<br>No cambiador<br>No canviador',
			query: '(nwr["changing_table"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 202, 0, 0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 202, 0, 0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 202, 0, 0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'Limited changing table<br>Uso limitado<br>Ús limitat',
			query: '(nwr["changing_table"="limited"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(243, 156, 18 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(243, 156, 18 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(243, 156, 18 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'Changing table ? <br><b><a href="https://mapcomplete.osm.be/theme.html?userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fchangingtable.json&language=en#welcome">+ info</a></b>',
			query: '(nwr[amenity][!"changing_table"]({{bbox}});node(w);nwr[shop][!"changing_table"]({{bbox}});node(w);nwr[office][!"changing_table"]({{bbox}});node(w);nwr[tourism][!"changing_table"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'Changing table fee<br>De pago<br>De pagament',
			query: '(nwr["changing_table:fee"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(52, 152, 219 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(52, 152, 219,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(52, 152, 219 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'No changing table fee<br>Gratis<br>De franc',
			query: '(nwr["changing_table:fee"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(125, 206, 160 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(125, 206, 160 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(125, 206, 160 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'Changing table fee ? <br><b><a href="https://mapcomplete.osm.be/theme.html?userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fchangingtable.json&language=en#welcome">+ info</a></b>',
			query: '(nwr[changing_table][!"changing_table:fee"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In wheelchair toilet<br>WC minusválidos<br>WC minusvàlids',
			query: '(nwr["changing_table:location"="wheelchair_toilet"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 255, 165, 250 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 255, 165, 250 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 255, 165, 250 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In female toilet<br>WC mujeres<br>WC dones',
			query: '(nwr["changing_table:location"="female_toilet"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 186, 74, 0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 186, 74, 0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 186, 74, 0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In male toilet<br>WC hombres<br>WC homes',
			query: '(nwr["changing_table:location"="male_toilet"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(223, 255, 0,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(223, 255, 0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(223, 255, 0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In unisex toilet<br>WC Unisex',
			query: '(nwr["changing_table:location"="unisex_toilet"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(204, 204, 255,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 204, 204, 255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(204, 204, 255 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In a dedicated room<br>Habitación dedicada<br>Habitació dedicada',
			query: '(nwr["changing_table:location"="dedicated_room"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 255, 165, 250 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 255, 165, 250 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 255, 165, 250 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In a room<br>Habitación<br>Habitació',
			query: '(nwr["changing_table:location"="room"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(100, 149, 237,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(100, 149, 237 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(100, 149, 237 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In sales_area<br>Sala de ventas<br>Sala de vendes',
			query: '(nwr["changing_table:location"="sales_area"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0, 0, 128,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0, 0, 128,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0, 0, 128,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
						title: 'Changing table location ? <br>Localización ? <br>Localització ?<b><a href="https://mapcomplete.osm.be/theme.html?userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fchangingtable.json&language=en#welcome">+ info</a></b>',
query: '(nwr[changing_table][!"changing_table:location"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'check_date > 2020<br>Datos antes 2020<br>Dades abans 2020',
			query: '(nwr["changing_table"="yes"][~"^check_date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Changing_table|Cambiador|Canviador',
			title: '2020 < check_date<br>Datos después 2020<br>Dades després 2020',
			query: '(nwr["changing_table"="yes"][~"^check_date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Playground<br>Zona de juegos<br>Zona de jocs',
			query: '(nwr["leisure"="playground"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 255, 165, 250 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 255, 165, 250 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 255, 165, 250 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Structure <br>Estructura<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/SunwardCohousingPlayStructure2005.jpg/100px-SunwardCohousingPlayStructure2005.jpg" width="100" />',
			query: '(nwr["playground"="structure"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0, 0, 128 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0, 0, 128 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0, 0, 128 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Slide<br>Tobogan<br> <img src="https://wiki.openstreetmap.org/w/images/thumb/9/90/Accessibleplay-Slide.jpg/100px-Accessibleplay-Slide.jpg" width="100" />',
			query: '(nwr["playground"="slide"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(128, 0, 128,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(128, 0, 128 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(128, 0, 128,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Climbingframe<br>tela de araña<br>xarxa<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/DeimosXL1.jpg/100px-DeimosXL1.jpg" width="100" />',
			query: '(nwr["playground"="climbingframe"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255, 0, 255 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255, 0, 255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255, 0, 255,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Climbing wall<br>muro de escalada<br>mur d`escalada<br><img src="https://wiki.openstreetmap.org/w/images/thumb/9/91/Playground_climbingwall.jpg/100px-Playground_climbingwall.jpg" width="100" />',
			query: '(nwr["playground"="climbingwall"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0, 0, 255,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0, 0, 255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0, 0, 255,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Balance beam<br>Equilibrios<br>Equilibris<br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Playground_Balance_beam.jpg/100px-Playground_Balance_beam.jpg" width="100" />',
			query: '(nwr["playground"="balancebeam"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0, 128, 128,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0, 128, 128 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0, 128, 128 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Playhouse<br>Caseta<br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Playhouse.jpg/100px-Playhouse.jpg" width="100" />',
			query: '(nwr["playground"="playhouse"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0, 255, 255,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0, 255, 255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0, 255, 255 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Sand pit<br>Arenero<br>Sorral<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Zandbakw.jpg/100px-Zandbakw.jpg" width="100" />',
			query: '(nwr["playground"="sandpit"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0, 128, 0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0, 128, 0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0, 128, 0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Hopscotch<br>Rayuela<br>Xarranca<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hinkelbaan_tegels.jpg/100px-Hinkelbaan_tegels.jpg" width="100" />',
			query: '(nwr["playground"="hopscotch"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0, 255, 0,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0, 255, 0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0, 255, 0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Teenshelter<br>Refugio<br>Refugi<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Teen_shelter_near_former_coastguard_lookout%2C_Watchet_-_geograph.org.uk_-_1714960.jpg/100px-Teen_shelter_near_former_coastguard_lookout%2C_Watchet_-_geograph.org.uk_-_1714960.jpg" width="100" />',
			query: '(nwr["playground"="teenshelter"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(128, 128, 0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(128, 128, 0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(128, 128, 0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Sledding<br>Pendiente<br>Pendent<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Prangli_lapsed_kelgutamas.jpg/100px-Prangli_lapsed_kelgutamas.jpg" width="100" />',
			query: '(nwr["playground"="sledding"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(128, 0, 0,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(128, 0, 0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(128, 0, 0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Youth bench<br>Banquito<br>Banquet<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Youth_bench.jpg/100px-Youth_bench.jpg" width="100" />',
			query: '(nwr["playground"="youth_bench"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(128, 128, 128,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(128, 128, 128 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(128, 128, 128 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Map<br>Mapa<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Playground_Map%2C_Washington_Elementary.jpg/100px-Playground_Map%2C_Washington_Elementary.jpg" width="100" />',
			query: '(nwr["playground"="map"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(233, 30, 99,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(233, 30, 99,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 233, 30, 99,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Bridge<br>Puente<br>Pont<br> <img src="https://wiki.openstreetmap.org/w/images/thumb/6/63/Playground_wooden_wobbly_bridge.jpg/100px-Playground_wooden_wobbly_bridge.jpg" width="100" />',
			query: '(nwr["playground"="bridge"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(171, 71, 188,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(171, 71, 188,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(171, 71, 188,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Funnel_ball<br>Cesta y puntos<br>Funelbol<br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Funnel_ball.jpg/100px-Funnel_ball.jpg" width="100" />',
			query: '(nwr["playground"="funnel_ball"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(126, 87, 194,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(126, 87, 194,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(126, 87, 194,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Tunnel tube<br>Tubo<br>Tub<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Example_of_tunnel_tube_on_a_playground.jpg/100px-Example_of_tunnel_tube_on_a_playground.jpg" width="100" />',
			query: '(nwr["playground"="tunnel_tube"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 66, 165, 245 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 66, 165, 245 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 66, 165, 245 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Speaking tube<br>Tubo parlanchín<br>Tub per parlar<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Speaking_Tube_-_Garden_Exhibit_-_NCSM_-_Kolkata_2016-06-02_4046.JPG/100px-Speaking_Tube_-_Garden_Exhibit_-_NCSM_-_Kolkata_2016-06-02_4046.JPG" width="100" />',
			query: '(nwr["playground"="speaking_tube"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(38, 198, 218,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(38, 198, 218,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(38, 198, 218,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Ball pool<br>Piscina de bolas<br>Piscina de boles<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/At_children%27s_level.jpg/100px-At_children%27s_level.jpg" width="100" />',
			query: '(nwr["playground"="ball_pool"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(77, 182, 172,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(77, 182, 172,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(77, 182, 172,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Activity panel<br>Panel de actividades<br>Panell d`activitats<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Szwedy_-_plac_zabaw_-_k%C3%B3%C5%82ko_i_krzy%C5%BCyk.jpg/100px-Szwedy_-_plac_zabaw_-_k%C3%B3%C5%82ko_i_krzy%C5%BCyk.jpg" width="100" />',
			query: '(nwr["playground"="activitypanel"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 102, 187, 106 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 102, 187, 106 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 102, 187, 106 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 1|Parque|Parc',
			title: 'Horizontal bar<br>Barra horizontal<br>Barra horitzontal<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Rekstok.JPG/100px-Rekstok.JPG" width="100" />',
			query: '(nwr["playground"="horizontal_bar"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(212, 225, 87,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(212, 225, 87 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(212, 225, 87,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
{
			group: 'Playground 1|Parque|Parc',
						title: 'Playground + ? <br><b><a href="https://mapcomplete.osm.be/theme.html?userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fplayground_types.json&language=en#welcome">+ info</a></b>',
			query: '(nwr["leisure"="playground"][!"playground"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Playground 1|Parque|Parc',
			title: 'check_date > 2020<br>Datos antes 2020<br>Dades abans 2020',
			query: '(nwr["playground"][~"^check_date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Playground 1|Parque|Parc',
			title: '2020 < check_date<br>Datos después 2020<br>Dades després 2020',
			query: '(nwr["playground"][~"^check_date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Playground (Generic)',
			query: '(nwr["leisure"="playground"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 255, 165, 250 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 255, 165, 250 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 255, 165, 250 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Swing<br>Columpio<br>Gronxador<br> <img src="https://wiki.openstreetmap.org/w/images/thumb/6/6c/Accessibleplay-Swing.jpg/100px-Accessibleplay-Swing.jpg" width="100" />',
			query: '(nwr["playground"="swing"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(212, 225, 87,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(212, 225, 87,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(212, 225, 87,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Spinning circle<br>Círculo<br>Cercle<br> <img src="https://wiki.openstreetmap.org/w/images/thumb/7/75/Spinning_circle.jpg/100px-Spinning_circle.jpg" width="100" />',
			query: '(nwr["playground"="spinning_circle"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255, 138, 101,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255, 138, 101,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255, 138, 101,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Basket swing<br>Columpio cesta<br>Gronxador cistell<br> <img src="https://wiki.openstreetmap.org/w/images/thumb/7/75/Spinning_circle.jpg/100px-Spinning_circle.jpg" width="100" />',
			query: '(nwr["playground"="basketswing"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(161, 136, 127,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(161, 136, 127,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(161, 136, 127,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Basket rotator<br>Peonza<br>Baldufa<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Playground_Basket-Rotator_Berlin_Germany.jpg/100px-Playground_Basket-Rotator_Berlin_Germany.jpg" width="100" />',
			query: '(nwr["playground"="basketrotator"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(109, 76, 65,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(109, 76, 65,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(109, 76, 65,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Aerial rotator<br>Hélice<br>Hèlix<br> <img src="https://wiki.openstreetmap.org/w/images/thumb/8/81/Hanging_roundabout.jpg/100px-Hanging_roundabout.jpg" width="100" />',
			query: '(nwr["playground"="aerialrotator"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 236, 64, 122 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 236, 64, 122 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 236, 64, 122 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Seesaw<br>Balancín<br>Balancí<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Seesaw-aa.jpg/100px-Seesaw-aa.jpg" width="100" />',
			query: '(nwr["playground"="seesaw"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(186, 104, 200,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(186, 104, 200,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(186, 104, 200,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Springy<br>Muelles<br>Molles<br> <img src="https://wiki.openstreetmap.org/w/images/thumb/0/06/Springy_horse.jpg/100px-Springy_horse.jpg" width="100" />',
			query: '(nwr["playground"="springy"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 179, 157, 219 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 179, 157, 219 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 179, 157, 219 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Trampoline<br>Trampolín<br>Trampolí <img src="https://wiki.openstreetmap.org/w/images/thumb/9/95/Playground_trampoline.jpg/100px-Playground_trampoline.jpg" width="100" />',
			query: '(nwr["playground"="trampoline"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(63, 81, 181,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(63, 81, 181,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(63, 81, 181,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Roundabout<br>Rotonda<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Manually_powered_carousel_on_a_playground_in_Saint-Petersburg.JPG/100px-Manually_powered_carousel_on_a_playground_in_Saint-Petersburg.JPG" width="100" />',
			query: '(nwr["playground"="roundabout"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 100, 181, 246 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 100, 181, 246 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 100, 181, 246 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Cushion<br>Elástica<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/H%C3%BCpfkissen.jpg/100px-H%C3%BCpfkissen.jpg" width="100" />',
			query: '(nwr["playground"="cushion"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(38, 198, 218,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(38, 198, 218,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(38, 198, 218,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Exercise<br>Ejercicios<br>Exercicis<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Outdoor_gym_in_Parque_de_Bateria%2C_Torremolinos.JPG/100px-Outdoor_gym_in_Parque_de_Bateria%2C_Torremolinos.JPG" width="100" />',
			query: '(nwr["playground"="exercise"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 0, 137, 123 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 0, 137, 123  ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 0, 137, 123 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Zipwire<br>Tirolina<br> <img src="https://wiki.openstreetmap.org/w/images/thumb/2/21/Ropeway_play.jpg/100px-Ropeway_play.jpg" width="100" />',
			query: '(nwr["playground"="zipwire"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(104, 159, 56,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(104, 159, 56,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(104, 159, 56,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Splash pad<br>Remojo<br>Remullada<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Urbeach-high-park-splashpad.jpg/100px-Urbeach-high-park-splashpad.jpg" width="100" />',
			query: '(nwr["playground"="splash_pad"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 202, 0, 0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 202, 0, 0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 202, 0, 0  ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Playground 2|Parque|Parc',
			title: 'Water<br>Agua<br>Aigua<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Norden_Archimedische_Schraube.jpg/100px-Norden_Archimedische_Schraube.jpg" width="100" />',
			query: '(nwr["playground"="water"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(230, 238, 156,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(230, 238, 156,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(230, 238, 156,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
{
			group: 'Playground 2|Parque|Parc',
						title: 'Playground + ? <br><b><a href="https://mapcomplete.osm.be/theme.html?userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fplayground_types.json&language=en#welcome">+ info</a></b>',
query: '(nwr["leisure"="playground"][!"playground"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Playground 2|Parque|Parc',
			title: 'check_date > 2020<br>Datos antes 2020<br>Dades abans 2020',
			query: '(nwr["playground"][~"^check_date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Playground 2|Parque|Parc',
			title: '2020 < check_date<br>Datos después 2020<br>Dades després 2020',
			query: '(nwr["playground"][~"^check_date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Generic',
			title: 'Baby (yes)<br>Bebé sí<br>Nadó sí',
			query: '(nwr["baby"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 255, 165, 250 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 255, 165, 250 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 255, 165, 250 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Generic',
			title: 'Baby (no)<br>Bebé no<br>Nadó no',
			query: '(nwr["baby"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 202, 0, 0  ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 202, 0, 0  ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 202, 0, 0  ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },


		{
			group: 'Generic',
			title: 'Shop=baby_goods<br>Puericultura',
			query: '(nwr["shop"="baby_goods"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/osmbabymap_logo.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/osmbabymap_logo.svg',
							scale:0.12
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		}
		
	],
	

	

	//Es crida sempre que es fa click sobre el mapa
	onClickEvent: function(evt, view, coordinateLL) {

		var complete = $('<div>').html(config.i18n.completeWith);
		
		//Mapcomplete parques
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Parques infantiles', href: 'https://mapcomplete.osm.be/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fplayground_types.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://wiki.openstreetmap.org/w/images/3/31/Playground-16.svg', height: 20, width: 20})));
		
		//Mapcomplete cambiadores
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Cambiadores', href: 'https://mapcomplete.osm.be/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fchangingtable.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/osmbabymap/main/src/img/icones/pelele.svg', height: 20, width: 20})));
		
		//Mapcomplete cambiadores
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Alimentación infantil', href: 'https://mapcomplete.osm.be/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fbabyfeeding.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/osmbabymap/main/src/img/icones/babyfeeding.svg', height: 20, width: 20})));
		
		//OSM Hydrants
		//complete.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Hydrants', href: 'https://www.osmhydrant.org/en/#zoom=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones/mc_operationalstatusdate.svg', height: 20, width: 20})));
		
		//complete.append($('<a>').css('marginLeft', 5).attr({title: 'Mapcomplete hidrantes', href: 'https://mapcomplete.osm.be/hailhydrant.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&language=en&background=osm', target: '_blank'}).html($('<img>').attr({src:'https://yopaseopor.github.io/osmpoismap/src/img/osmffmap_logo.svg', height: 20, width: 20})));
		
		//Mapcomplete nombres antiguos
		//complete.append($('<a>').css('marginLeft', 5).attr({title: 'Pasos peatones', href: 'https://mapcomplete.osm.be/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fcrossingtime.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.png', height: 20, width: 20})));
		
		//Mapcomplete basura
		//complete.append($('<a>').css('marginLeft', 5).attr({title: 'Basura y reciclaje', href: 'https://mapcomplete.osm.be/waste.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src:'https://mapcomplete.osm.be/assets/layers/recycling/recycling-14.svg', height: 20, width: 20})));
		
		var edit = $('<div>').html(config.i18n.editWith);
		//ID editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://www.openstreetmap.org/edit?editor=id&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ID.svg', height: 20, width: 20})));
		//Potlatch 2 editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Potlatch 2', href: 'https://www.openstreetmap.org/edit?editor=potlatch2&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'potlatch2logobig.png', height: 20, width: 20})));
		//JOSM editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'JOSM', href: 'https://www.openstreetmap.org/edit?editor=remote&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'JOSM Logotype 2019.svg', height: 20, width: 20})));

		var open = $('<div>').html(config.i18n.openWith);
		//OSM
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Here WeGo
		open.append($('<a>').css('marginLeft', 5).attr({title: 'HERE WeGo', href: 'https://wego.here.com/?map=' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 18) + ',transit', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'here_logo.png', height: 20, width: 20})));
		//Google
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Google Maps', href: 'https://maps.google.es/maps?ll=' + coordinateLL[1] + ',' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'gmaps_logo_layer.png', height: 20, width: 20})));
		//Apple
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Apple Maps', href: 'https://duckduckgo.com/?t=ffab&q=' + coordinateLL[1] + ',' + coordinateLL[0] + '+Show+on+Map&ia=maps&iaxm=maps,' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'applemaps_logo.png', height: 20, width: 20})));
		//Bing
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Bing', href: 'https://www.bing.com/maps?cp=' + coordinateLL[1] + '~' + coordinateLL[0] + '&lvl=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'bing_logo.png', height: 20, width: 20})));
		//Mapillary
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Mapillary', href: 'https://www.mapillary.com/app/?lat=' + coordinateLL[1] + '&lng=' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapillary_logo.png', height: 20, width: 20})));
		
		//Karta View
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Karta View', href: 'https://kartaview.org/map/@' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 20) + 'z' , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'kartaview_logo.png', height: 20, width: 20})));
		
		var tool = $('<div>').html(config.i18n.checkTools);
		//Notes a OSM
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes a OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom() + '&layers=N', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Keep right!
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Keep right!', href: 'https://www.keepright.at/report_map.php?lang=es&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 19) + '&ch50=1&ch191=1&ch195=1&ch201=1&ch205=1&ch206=1&ch311=1&ch312=1&ch313=1&ch402=1&number_of_tristate_checkboxes=8&highlight_error_id=0&highlight_schema=0show_ign=1&show_tmpign=1&layers=B0T&ch=0%2C50%2C70%2C170%2C191%2C195%2C201%2C205%2C206%2C220%2C231%2C232%2C311%2C312%2C313%2C402', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'keepright_logo.png', height: 20, width: 20})));
		//Geofabrik Tools
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Geofabrik Tools', href: 'https://tools.geofabrik.de/osmi/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 18) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'geofabrik.png', height: 20, width: 20})));
		
		//Notes Review
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes Review', href: 'https://ent8r.github.io/NotesReview/?view=map&map=' + Math.min(view.getZoom(), 20) + '%2F' + coordinateLL[1] + '%2F' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'notesreview_logo.png', height: 20, width: 20})));
		
		//Latest OpenStreetMap Edits per Tile
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Latest OpenStreetMap Edits per Tile', href: 'https://resultmaps.neis-one.org/osm-change-tiles#' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'neis-one_logo.png', height: 20, width: 20})));
		
		var show = $('<div>').html(config.i18n.showWith);
		//OpenLevelUp
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenLevelUp!', href: 'https://openlevelup.net/#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'openlevelup_logo.png', height: 20, width: 20})));
		
		//Waymarkedtrails
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Waymarked trails', href: 'https://hiking.waymarkedtrails.org/#?map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'waymarkedtrails_logo.png', height: 20, width: 20})));
		
		//OpenCampingMap
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenCampingMap', href: 'https://opencampingmap.org/#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '/0/1/fff', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'opencampingmap_logo.svg', height: 20, width: 20})));
		
		//Osmand
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Osmand', href: 'https://osmand.net/map#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmand_logo.png', height: 20, width: 20})));
		
		//Openrouteservice
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenRouteService', href: 'https://maps.openrouteservice.org/#/place/@' + coordinateLL[0] + ',' + coordinateLL[1] + ',' + Math.min(view.getZoom(), 20) , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ors_logo.svg', height: 20, width: 20})));
		
		//OSM Routing Machine
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Routing Machine', href: 'http://map.project-osrm.org/?z=' + Math.min(view.getZoom(), 20) + '&center=' + coordinateLL[1] + '%2C' + coordinateLL[0] + '&hl=en&alt=0&srv=0', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osrm_logo.png', height: 20, width: 20})));
		
		//Graphhopper
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Graphhopper', href: 'https://graphhopper.com/maps/?point=' + coordinateLL[1] + '%2C' + coordinateLL[0] + '&locale=en&elevation=true&profile=car&use_miles=false&selected_detail=Elevation&layer=Omniscale', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'graphhopper_logo.png', height: 20, width: 20})));
		
		//Brouter
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Brouter', href: 'http://brouter.de/brouter-web/#map=' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '/standard', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'brouter_logo.png', height: 20, width: 20})));
		
		//F4 Map 3D
		show.append($('<a>').css('marginLeft', 5).attr({title: 'F4 Map 3D', href: 'https://demo.f4map.com/#lat=' + coordinateLL[1] + '&lon=' + coordinateLL[0] + '&zoom=' + Math.min(view.getZoom(), 20) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'f4map_logo.png', height: 20, width: 20})));
		
		//Qwant
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Qwant', href: 'https://www.qwant.com/maps/place/latlon:' + coordinateLL[1] + ':' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'qwantmaps_logo.svg', height: 20, width: 20})));
		
		//Mapy.cz
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Mapy.cz', href: 'https://en.mapy.cz/zakladni?x=' + coordinateLL[0] + '&y=' + coordinateLL[1] + '&z=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapycz_logo.png', height: 20, width: 20})));
		
		//OpenStreetBrowser
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenStreetBrowser', href: 'https://www.openstreetbrowser.org/#map=' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osb_logo.png', height: 20, width: 20})));
		
		var show2 = $('<div>').html(config.i18n.show2With);
		
		//OSM Accessibility Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Accessibility Map', href: 'https://yopaseopor.github.io/osmaccessibilitymap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmaccessibilitymap_logo.svg', height: 20, width: 20})));
		
				//OSM FireFighters Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Fire Fighters Map', href: 'https://yopaseopor.github.io/osmffmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmffmap_logo.svg', height: 20, width: 20})));
		
				//OSM Historic Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Historic Map', href: 'https://yopaseopor.github.io/osmhistoricmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmhistoricmap_logo.png', height: 20, width: 20})));
				
				//OSM Lit Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Lit Map', href: 'https://yopaseopor.github.io/osmlitmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmlitmap_logo.svg', height: 20, width: 20})));
		
				//OSM Lit Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Limits Map', href: 'https://yopaseopor.github.io/osmlimitsmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmlimitsmap_logo.svg', height: 20, width: 20})));
		
				//OSM Library Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Library Map', href: 'https://yopaseopor.github.io/osmlibrarymap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmlibrarymap_logo.svg', height: 20, width: 20})));
		
				//OSM MTB Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM MTB Map', href: 'https://osm-es.github.io/osmmtbmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmmtbmap_logo.svg', height: 20, width: 20})));
		
				//OSM Parking Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Parking Map', href: 'https://osm-es.github.io/osmparkingmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmparkingmap_logo.svg', height: 20, width: 20})));
		
				//OSM Recycling Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Recycling Map', href: 'https://yopaseopor.github.io/osmrecyclingmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmrecyclingmap_logo.svg', height: 20, width: 20})));
		
				//OSM Validator Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Validator Map', href: 'https://yopaseopor.github.io/osmvalidatormap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmvalidatormap_logo.svg', height: 20, width: 20})));
		
				//OSM POIs Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM POIs Map', href: 'https://yopaseopor.github.io/osmpoismap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmpoismap_logo.svg', height: 20, width: 20})));
		
					return $.merge($.merge($.merge($.merge($.merge(open, show), show2), tool), complete), edit);
	},

	//Es crida per cada element trobat al fer click
	forFeatureAtPixel: function(evt, feature) {
		var node = $('<div>').css('borderTop', '1px solid');
		var metaNode = feature.get('meta');

		if (metaNode && metaNode['type']) {
			var nodeType = metaNode['type'];
			node.append([config.i18n[nodeType==='node' ? 'nodeLabel' : 'wayLabel'], ' ', $('<a>').css('fontWeight', 900).attr({href: 'https://www.openstreetmap.org/' + nodeType + '/' + feature.getId(), target: '_blank'}).html(feature.getId()), '<br/>']);
		} else {
			node.append([config.i18n.nodeLabel, ' ', $('<span>').css('fontWeight', 900).html(feature.getId()), '<br/>']);
		}

		$.each(feature.getProperties(), function (index, value) {
			if (typeof value !== 'object') {
				node.append([$('<a>').attr({href: 'https://wiki.openstreetmap.org/wiki/Key:' + index + '?uselang=ca', target: '_blank'}).html(index), ': ', value, '<br/>']);
			}
		});

		if (metaNode) {
			var metaNodeDiv = $('<div>').css({'borderLeft': '1px solid', 'margin': '2px 0 0 3px', 'paddingLeft': '3px'});
			$.each(metaNode, function (index, value) {
				if (index !== 'id' && index !== 'type' && index !== 'uid') {
					var valueEl = value;
					switch (index) {
						case 'user':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/user/' + value, target: '_blank'}).html(value);
							break;
						case 'changeset':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/changeset/' + value, target: '_blank'}).html(value);
							break;
					}
					metaNodeDiv.append([index, ': ', valueEl, '<br/>']);
				}
			});
			node.append(metaNodeDiv);
		}

		return node;
	},

	//Es crida sempre que es fa click sobre el mapa
	onClickEventExtra: function(evt, view, coordinateLL, numFeatures) {

		if (!numFeatures) {
			//TODO Consulta dels nodes proxims a la posicio
			var marge = 0.0003,
				query = 'node({{bbox}});out;';

			query = query.replace('{{bbox}}', (coordinateLL[1] - marge) + ',' + (coordinateLL[0] - marge) + ',' + (coordinateLL[1] + marge) + ',' + (coordinateLL[0] + marge));
			console.log('query:', query);
		}

		return {};
	}
};

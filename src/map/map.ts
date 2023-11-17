import Leaflet from "leaflet";
import { tooltip } from "leaflet";
import type { LatLngTuple } from "leaflet";
import 'leaflet/dist/leaflet.css';

export const peta = {
    generate: async (param: any) => {
        let { layer, coordinate, zoom, minZoom, maxZoom } = param;

        let map = Leaflet.map("map").setView(coordinate, zoom);
        Leaflet.tileLayer(
            layer,
            {
                minZoom: minZoom,
                maxZoom: maxZoom,
                crossOrigin: true,
            })
            .addTo(map);

        Leaflet.marker(coordinate).addTo(map);
        return map;
    },

    addMarker: async (map: any, coordinate: any, tooltip: any) => {
        Leaflet
            .marker(coordinate)
            .bindPopup(tooltip)
            .addTo(map);
    },

    addGeoJSON: async (map: any, geojsonFeature: any) => {
        Leaflet.geoJSON(geojsonFeature).bindPopup("ss").addTo(map);
    }
}
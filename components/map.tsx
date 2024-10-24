'use client'

import { useEffect, useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

// Map container styling
const defaultMapContainerStyle = {
    margin: "auto",
    width: '100%',
    height: '100%',
};

// K2's coordinates
const defaultMapCenter = {
    lat: 47.39883430890226,
    lng: 8.534156550412876,
};

// Default zoom level
const defaultMapZoom = 13;

// Custom map styles (JSON styles for the map)
const customMapStyles = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cad5c5"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#445d3e"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"  // Remove stroke by hiding it
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#c9b2a6"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#dcd2be"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ae9e90"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a5b89d"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#93817c"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a5b076"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#447530"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9de"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9de"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#e9e9de"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9de"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#e9e9de"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#806b63"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8f7d77"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#95b3af"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#92998d"
            }
        ]
    }
];

// Map options with custom styles
const defaultMapOptions = {
    zoomControl: false,       // Custom controls, so hide the default ones
    mapTypeControl: false,    // Hide map type controls
    fullscreenControl: false, // Hide fullscreen button
    streetViewControl: false, // Hide street view button
    styles: customMapStyles,  // Apply custom map styles here
};

const defaultIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

const MapComponent = () => {
    // Explicitly type the mapRef to expect a GoogleMap instance or null
    const mapRef = useRef<google.maps.Map | null>(null);

    useEffect(() => {
        if (mapRef.current) {
            const map = mapRef.current;

            // Custom Zoom Control
            const zoomInButton = document.createElement('div');
            zoomInButton.textContent = '+';
            zoomInButton.style.fontSize = '20px';  // Set font size
            zoomInButton.style.padding = '10px';
            zoomInButton.style.cursor = 'pointer';
            zoomInButton.style.backgroundColor = '#fff';
            zoomInButton.style.border = '2px solid #000';
            zoomInButton.style.margin = '10px';

            const zoomOutButton = document.createElement('div');
            zoomOutButton.textContent = '-';
            zoomOutButton.style.fontSize = '20px';  // Set font size
            zoomOutButton.style.padding = '10px';
            zoomOutButton.style.cursor = 'pointer';
            zoomOutButton.style.backgroundColor = '#fff';
            zoomOutButton.style.border = '2px solid #000';
            zoomOutButton.style.margin = '10px';

            // Check if map exists before calling setZoom
            zoomInButton.addEventListener('click', () => {
                if (map) {
                    map.setZoom(map.getZoom()! + 1);  // Add non-null assertion (!)
                }
            });

            zoomOutButton.addEventListener('click', () => {
                if (map) {
                    map.setZoom(map.getZoom()! - 1);  // Add non-null assertion (!)
                }
            });

            // Add custom controls to the map
            map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(zoomInButton);
            map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(zoomOutButton);
        }
    }, []);

    return (
        <div className="map-container" style={{ position: 'relative', width: '100%', height: '500px' }}>
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
                onLoad={(map) => {
                    mapRef.current = map; // Set the map instance to mapRef
                }}  // Ensure this doesn't return anything
            >
                <Marker
                    position={defaultMapCenter}
                    icon={defaultIcon}
                />
            </GoogleMap>
        </div>
    );
};

export { MapComponent };

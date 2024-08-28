/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'

//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";

//Map's styling
const defaultMapContainerStyle = {
    margin: "auto",
    width: '100%',
    height: '100%',

};

//K2's coordinates
const defaultMapCenter = {
    lat: 47.39883430890226,
    lng: 8.534156550412876
}

//Default zoom level, can be adjusted
const defaultMapZoom = 13

//Map options
const defaultMapOptions = {
    zoomControl: false,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
};

const defaultIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

const MapComponent = () => {
    return (
        <div className="w-full h-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
                <Marker
                    position={defaultMapCenter}
                    icon={defaultIcon} />
            </GoogleMap>
        </div>
    )
};

export { MapComponent };
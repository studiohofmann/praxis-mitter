"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  // Create a unique ID for each map instance
  const mapId = useRef(`map-${Math.random().toString(36).substring(2, 9)}`);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Fix the missing marker icon issue
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });

    // Initialize the map only in the browser
    const map = L.map(mapId.current, {
      center: [47.398504, 8.533577],
      zoom: 13,
    });

    mapRef.current = map;

    // Add a tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker
    L.marker([47.398504, 8.533577])
      .addTo(map)
      .bindPopup("Gesundheitspraxis Mitter")
      .openPopup();

    // Cleanup on unmount
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      id={mapId.current}
      className="h-full w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/6]"
    ></div>
  );
};

export default Map;

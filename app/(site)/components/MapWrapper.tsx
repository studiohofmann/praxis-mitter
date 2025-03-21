"use client";

import dynamic from "next/dynamic";

export default function MapWrapper() {
  // Dynamically import the Map component with no SSR
  const Map = dynamic(() => import("./Map"), {
    ssr: false, // This is crucial - prevents server-side rendering
    loading: () => (
      <div className="h-96 w-full bg-gray-100">Loading map...</div>
    ),
  });

  return <Map />;
}

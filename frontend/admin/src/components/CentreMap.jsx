import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const centres = [
  {
    id: 1,
    name: "Centre A",
    district: "Darbhanga",
    queue: 137,
    load: 94,
    waitingTime: 150,
    activeCounters: 4,
    processedToday: 280,
    lat: 26.15,
    lng: 85.89,
  },
  {
    id: 2,
    name: "Centre B",
    district: "Darbhanga",
    queue: 35,
    load: 35,
    waitingTime: 35,
    activeCounters: 5,
    processedToday: 210,
    lat: 26.12,
    lng: 85.91,
  },
  {
    id: 3,
    name: "Centre C",
    district: "Madhubani",
    queue: 78,
    load: 68,
    waitingTime: 82,
    activeCounters: 3,
    processedToday: 190,
    lat: 26.35,
    lng: 86.07,
  },
];

function getStatus(load) {
  if (load >= 85) return "congested";
  if (load >= 60) return "medium";
  return "normal";
}

function getColor(load) {
  if (load >= 85) return "#dc3545";
  if (load >= 60) return "#f0ad00";
  return "#2f8f4e";
}

function CentreMap() {
  return (
    <div className="map-card">
      <div className="map-header">
        <div>
          <h2>Procurement Centre Network</h2>
          <p>Live centre load and queue monitoring</p>
        </div>

        <div className="map-legend">
          <span>
            <i className="legend-dot normal"></i>
            Normal
          </span>

          <span>
            <i className="legend-dot medium"></i>
            Medium
          </span>

          <span>
            <i className="legend-dot congested"></i>
            Congested
          </span>
        </div>
      </div>

      <MapContainer
        center={[26.20, 85.95]}
        zoom={9}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {centres.map((centre) => (
          <CircleMarker
            key={centre.id}
            center={[centre.lat, centre.lng]}
            radius={12}
            pathOptions={{
              color: getColor(centre.load),
              fillColor: getColor(centre.load),
              fillOpacity: 0.75,
            }}
          >
            <Popup>
              <div className="popup">
                <h3>{centre.name}</h3>

                <p>
                  <strong>District:</strong> {centre.district}
                </p>

                <p>
                  <strong>Queue:</strong> {centre.queue} farmers
                </p>

                <p>
                  <strong>Load:</strong> {centre.load}%
                </p>

                <p>
                  <strong>Waiting:</strong> {centre.waitingTime} min
                </p>

                <p>
                  <strong>Active Counters:</strong>{" "}
                  {centre.activeCounters}
                </p>

                <p>
                  <strong>Processed Today:</strong>{" "}
                  {centre.processedToday}
                </p>

                <span className={`status ${getStatus(centre.load)}`}>
                  {getStatus(centre.load).toUpperCase()}
                </span>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}

export default CentreMap;
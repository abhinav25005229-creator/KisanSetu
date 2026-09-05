import { useNavigate } from "react-router-dom";

const centres = [
  {
    id: 1,
    name: "Bahadurpur Procurement Centre",
    distance: "2.4 km",
    queue: 18,
    wait: 42,
    load: "Medium",
  },
  {
    id: 2,
    name: "Darbhanga Main Centre",
    distance: "4.1 km",
    queue: 8,
    wait: 21,
    load: "Low",
  },
  {
    id: 3,
    name: "Benipur Procurement Centre",
    distance: "6.2 km",
    queue: 41,
    wait: 96,
    load: "High",
  },
];

export default function Centres() {
  const navigate = useNavigate();

  return (
    <div className="page-container">

      <div className="page-header">

        <button
          className="back-button"
          onClick={() => navigate("/farmer/add-produce")}
        >
          ← Back
        </button>

        <h1>Nearby Centres 📍</h1>

        <p>
          Apne liye suitable procurement centre choose karein
        </p>

      </div>

      <div className="centre-list">

        {centres.map((centre) => (
          <div className="centre-card" key={centre.id}>

            <div className="centre-top">

              <div>
                <h2>{centre.name}</h2>
                <span>{centre.distance}</span>
              </div>

            </div>

            <div className="centre-info">

              <div>
                <strong>👥 {centre.queue}</strong>
                <small>Queue</small>
              </div>

              <div>
                <strong>⏱️ {centre.wait} min</strong>
                <small>Estimated Wait</small>
              </div>

              <div>
                <strong>{centre.load}</strong>
                <small>Centre Load</small>
              </div>

            </div>

            <button
              className="primary-button"
              onClick={() =>
                navigate(`/farmer/centres/${centre.id}`)
              }
            >
              View Centre →
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}
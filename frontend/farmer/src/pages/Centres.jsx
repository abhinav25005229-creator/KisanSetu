import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

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

  const { t } = useLanguage();

  return (
    <div className="page-container">

      {/* Header */}
      <div className="page-header">

        <button
          className="back-button"
          onClick={() => navigate("/farmer/add-produce")}
        >
          ← Back
        </button>

        <h1>{t.centreTitle} 📍</h1>

        <p>{t.centreSubtitle}</p>

      </div>

      {/* Centre List */}
      <div className="centre-list">

        {centres.map((centre) => (

          <div
            className="centre-card"
            key={centre.id}
          >

            {/* Centre Name */}
            <div className="centre-top">

              <div>
                <h2>{centre.name}</h2>

                <span>
                  📍 {centre.distance}
                </span>
              </div>

            </div>

            {/* Centre Information */}
            <div className="centre-info">

              {/* Queue */}
              <div>
                <strong>
                  👥 {centre.queue}
                </strong>

                <small>
                  {t.queue}
                </small>
              </div>

              {/* Waiting Time */}
              <div>
                <strong>
                  ⏱️ {centre.wait} min
                </strong>

                <small>
                  {t.estimatedWait}
                </small>
              </div>

              {/* Centre Load */}
              <div>

                <strong>
                  {centre.load === "Low"
                    ? t.low
                    : centre.load === "Medium"
                    ? t.medium
                    : t.high}
                </strong>

                <small>
                  {t.centreLoad}
                </small>

              </div>

            </div>

            {/* AI Recommendation */}
            <button
              className="primary-button"
              onClick={() =>
                navigate(
                  `/farmer/recommendation/${centre.id}`
                )
              }
            >
              {t.getRecommendation} →
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}
const centres = [
  {
    id: 1,
    name: "Bahadurpur Procurement Centre",
    district: "Darbhanga",
    load: 94,
    queue: 137,
    waiting: 150,
    counters: 4,
    processed: 280,
    status: "Critical",
  },
  {
    id: 2,
    name: "Darbhanga Main Centre",
    district: "Darbhanga",
    load: 35,
    queue: 35,
    waiting: 35,
    counters: 5,
    processed: 210,
    status: "Normal",
  },
  {
    id: 3,
    name: "Benipur Procurement Centre",
    district: "Madhubani",
    load: 68,
    queue: 78,
    waiting: 82,
    counters: 3,
    processed: 190,
    status: "Moderate",
  },
  {
    id: 4,
    name: "Samastipur Procurement Centre",
    district: "Samastipur",
    load: 81,
    queue: 96,
    waiting: 105,
    counters: 4,
    processed: 240,
    status: "Moderate",
  },
];

function CentreDetails() {
  const criticalCount = centres.filter(
    (centre) => centre.status === "Critical"
  ).length;

  const moderateCount = centres.filter(
    (centre) => centre.status === "Moderate"
  ).length;

  const normalCount = 24 - criticalCount - moderateCount;

  return (
    <div className="centre-details">

      {/* SUMMARY */}
      <div className="centre-summary">

        <div className="summary-card">
          <span>🏢</span>

          <div>
            <small>Total Centres</small>
            <strong>24</strong>
          </div>
        </div>

        <div className="summary-card">
          <span>🔴</span>

          <div>
            <small>Critical</small>
            <strong>{criticalCount}</strong>
          </div>
        </div>

        <div className="summary-card">
          <span>🟡</span>

          <div>
            <small>Moderate</small>
            <strong>{moderateCount}</strong>
          </div>
        </div>

        <div className="summary-card">
          <span>🟢</span>

          <div>
            <small>Normal</small>
            <strong>{normalCount}</strong>
          </div>
        </div>

      </div>

      {/* TABLE */}
      <div className="centre-table-card">

        <div className="table-top">

          <div>
            <h2>Centre Operations</h2>

            <p>
              Current procurement centre performance
            </p>
          </div>

          <span className="demo-badge">
            DEMO DATA
          </span>

        </div>

        <div className="centre-table">

          <div className="centre-table-row table-head">

            <span>Centre</span>
            <span>Load</span>
            <span>Queue</span>
            <span>Waiting</span>
            <span>Counters</span>
            <span>Processed</span>
            <span>Status</span>

          </div>

          {centres.map((centre) => (

            <div
              className="centre-table-row"
              key={centre.id}
            >

              <div className="centre-name">

                <strong>
                  {centre.name}
                </strong>

                <small>
                  {centre.district}
                </small>

              </div>

              <div>

                <strong>
                  {centre.load}%
                </strong>

                <div className="mini-progress">

                  <div
                    className={`mini-progress-fill ${
                      centre.load >= 85
                        ? "critical-fill"
                        : centre.load >= 60
                        ? "moderate-fill"
                        : "normal-fill"
                    }`}
                    style={{
                      width: `${centre.load}%`,
                    }}
                  />

                </div>

              </div>

              <span>
                {centre.queue}
              </span>

              <span>
                {centre.waiting} min
              </span>

              <span>
                {centre.counters}
              </span>

              <span>
                {centre.processed}
              </span>

              <span
                className={`centre-status ${
                  centre.status.toLowerCase()
                }`}
              >
                {centre.status}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default CentreDetails;
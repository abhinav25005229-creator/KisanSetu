const procurementData = [
  {
    centre: "Bahadurpur Procurement Centre",
    wheat: 420,
    rice: 280,
    total: 700,
  },
  {
    centre: "Darbhanga Main Centre",
    wheat: 310,
    rice: 190,
    total: 500,
  },
  {
    centre: "Benipur Procurement Centre",
    wheat: 260,
    rice: 220,
    total: 480,
  },
];

function AnalyticsPanel() {
  return (
    <section className="analytics-grid">

      {/* PROCUREMENT ANALYTICS */}
      <div className="analytics-card">

        <div className="analytics-header">

          <div>
            <h2>🌾 Procurement Analytics</h2>
            <p>
              Today's procurement activity by centre
            </p>
          </div>

          <span className="analytics-badge">
            TODAY
          </span>

        </div>

        <div className="procurement-summary">

          <div>
            <small>Total Procured</small>
            <strong>1,680 Qtl</strong>
          </div>

          <div>
            <small>Farmers Served</small>
            <strong>890</strong>
          </div>

          <div>
            <small>Completed</small>
            <strong>82%</strong>
          </div>

        </div>

        <div className="analytics-table">

          <div className="table-row table-heading">
            <span>Centre</span>
            <span>Wheat</span>
            <span>Rice</span>
            <span>Total</span>
          </div>

          {procurementData.map((item) => (
            <div
              className="table-row"
              key={item.centre}
            >

              <span>
                <strong>{item.centre}</strong>
              </span>

              <span>
                {item.wheat} Qtl
              </span>

              <span>
                {item.rice} Qtl
              </span>

              <span>
                <strong>
                  {item.total} Qtl
                </strong>
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* PAYMENT ANALYTICS */}
      <div className="analytics-card">

        <div className="analytics-header">

          <div>
            <h2>💰 Payment Analytics</h2>
            <p>
              Procurement payment status
            </p>
          </div>

          <span className="analytics-badge payment">
            PAYMENT
          </span>

        </div>

        <div className="payment-total">
          <small>Total Payment Value</small>
          <h2>₹42.8 Lakh</h2>
          <span>Today's procurement</span>
        </div>

        <div className="payment-stats">

          <div className="payment-stat completed">

            <span>✓</span>

            <div>
              <small>Completed</small>
              <strong>₹34.2 L</strong>
              <p>80%</p>
            </div>

          </div>

          <div className="payment-stat pending">

            <span>⏳</span>

            <div>
              <small>Pending</small>
              <strong>₹6.4 L</strong>
              <p>15%</p>
            </div>

          </div>

          <div className="payment-stat initiated">

            <span>↗</span>

            <div>
              <small>Initiated</small>
              <strong>₹2.2 L</strong>
              <p>5%</p>
            </div>

          </div>

        </div>

        <div className="payment-progress">

          <div className="progress-label">
            <span>Payment completion</span>
            <strong>80%</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

        </div>

        <div className="payment-alert">
          ⚠️

          <span>
            <strong>₹6.4 Lakh</strong>{" "}
            payments need attention.
          </span>

        </div>

      </div>

    </section>
  );
}

export default AnalyticsPanel;
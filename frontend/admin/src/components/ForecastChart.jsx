import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const forecastData = [
  { time: "8 AM", actual: 45, predicted: 48 },
  { time: "9 AM", actual: 72, predicted: 70 },
  { time: "10 AM", actual: 96, predicted: 100 },
  { time: "11 AM", actual: 120, predicted: 118 },
  { time: "12 PM", actual: 145, predicted: 152 },
  { time: "1 PM", actual: 138, predicted: 145 },
  { time: "2 PM", actual: 110, predicted: 115 },
  { time: "3 PM", actual: 92, predicted: 95 },
  { time: "4 PM", actual: 76, predicted: 80 },
  { time: "5 PM", actual: 60, predicted: 64 },
];

function ForecastChart() {
  return (
    <section className="forecast-card">

      <div className="forecast-header">

        <div>
          <h2>📈 Farmer Arrival Forecast</h2>
          <p>
            Actual vs AI-predicted farmer arrivals
          </p>
        </div>

        <span className="forecast-badge">
          AI FORECAST
        </span>

      </div>

      <div className="chart-legend">

        <span>
          <i className="actual-dot"></i>
          Actual
        </span>

        <span>
          <i className="predicted-dot"></i>
          Predicted
        </span>

      </div>

      <div className="chart-container">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={forecastData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="actual"
              stroke="#2f8f4e"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Actual Arrivals"
            />

            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#7048c8"
              strokeWidth={3}
              strokeDasharray="6 6"
              dot={{ r: 3 }}
              name="AI Prediction"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      <div className="forecast-insight">

        <span>💡</span>

        <div>
          <strong>
            Peak arrival expected around 12 PM
          </strong>

          <p>
            AI predicts increased farmer arrivals during
            the peak window. Authorities can increase
            active counters before congestion occurs.
          </p>
        </div>

      </div>

    </section>
  );
}

export default ForecastChart;
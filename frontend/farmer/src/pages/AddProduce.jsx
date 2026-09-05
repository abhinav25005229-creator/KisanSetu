import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function AddProduce() {
  const navigate = useNavigate();

  const { t } = useLanguage();

  const [produce, setProduce] = useState({
    type: "",
    quantity: "",
    expectedDate: "",
  });

  const handleChange = (e) => {
    setProduce({
      ...produce,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary mock storage.
    // Later this will be replaced by the backend API.
    localStorage.setItem(
      "farmerProduce",
      JSON.stringify(produce)
    );

    navigate("/farmer/centres");
  };

  return (
    <div className="page-container">

      <div className="page-header">

        <button
          className="back-button"
          onClick={() => navigate("/farmer/dashboard")}
        >
          ← Back
        </button>

        <h1>{t.addProduceTitle} 🌾</h1>

        <p>
          Apni fasal ki details enter karein
        </p>

      </div>

      <div className="form-card">

        <form onSubmit={handleSubmit}>

          <label>{t.selectProduce}</label>

          <select
            name="type"
            value={produce.type}
            onChange={handleChange}
            required
          >
            <option value="">
              {t.selectProduce}
            </option>

            <option value="Wheat">
              Wheat / गेहूँ
            </option>

            <option value="Paddy">
              Paddy / धान
            </option>

            <option value="Maize">
              Maize / मक्का
            </option>

            <option value="Bajra">
              Bajra / बाजरा
            </option>
          </select>

          <label>{t.quantity}</label>

          <div className="quantity-input">

            <input
              type="number"
              name="quantity"
              placeholder={t.enterQuantity}
              value={produce.quantity}
              onChange={handleChange}
              min="1"
              required
            />

            <span>KG</span>

          </div>

          <label>
            {t.expectedDate} ({t.optional})
          </label>

          <input
            type="date"
            name="expectedDate"
            value={produce.expectedDate}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="primary-button"
          >
            {t.findCentres} →
          </button>

        </form>

      </div>

    </div>
  );
}
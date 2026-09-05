import { useLanguage } from "../context/LanguageContext";

export default function ErrorState({ onRetry }) {
  const { t } = useLanguage();

  return (
    <div className="state-container">

      <div className="state-icon">
        ⚠️
      </div>

      <h2>
        {t.somethingWrong}
      </h2>

      <p>
        {t.tryAgain}
      </p>

      {onRetry && (
        <button
          className="primary-button"
          onClick={onRetry}
        >
          🔄 {t.tryAgain}
        </button>
      )}

    </div>
  );
}
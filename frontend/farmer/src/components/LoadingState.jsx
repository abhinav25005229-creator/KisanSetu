import { useLanguage } from "../context/LanguageContext";

export default function LoadingState() {
  const { t } = useLanguage();

  return (
    <div className="state-container">
      <div className="state-icon">⏳</div>

      <h2>{t.loading}</h2>

      <p>
        Please wait...
      </p>
    </div>
  );
}
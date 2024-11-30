import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation("translation");

  return (
    <div>
      <h1>Internationalization (i18n) with I18next</h1>
      <select onChange={(event) => i18n.changeLanguage(event.target.value)}>
        {[
          { lng: "en", name: "English" },
          { lng: "ar", name: "العربية" },
        ].map((option) => {
          return <option value={option.lng}>{option.name}</option>;
        })}
      </select>

      <hr />

      <div>
        <p className="heading">
          Basic case
          <span>=&gt;</span>
        </p>
        <p>{t("greeting")}</p>
        <p>{t("freePalestine")}</p>
      </div>
    </div>
  );
}

export default App;

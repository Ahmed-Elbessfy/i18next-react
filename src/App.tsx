import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation("translation");

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
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

      {/* <div>
        <p className="heading">
          Basic case
          <span>=&gt;</span>
        </p>
        <p>{t("greeting")}</p>
        <p>{t("freePalestine")}</p>
      </div> */}

      {/* <div>
        <p className="heading">
          Interpolation <span>=&gt;</span>
        </p>
        <p dir={i18n.language === "ar" ? "rtl" : "ltr"}>
          {t("talkSource", {
            providerName: "Squadio",
          })}
        </p>
      </div> */}

      {/* <div>
        <p className="heading">
          Importance of "dir" attribute
          <span>=&gt;</span>
        </p>

        <textarea rows={5} dir="auto" placeholder="with dir"></textarea>
        <textarea rows={5} placeholder="without dir"></textarea>
        <p>
          <a href="https://youtu.be/05eEIpz-azs?list=PLNIpzzGero27nbWPOfWSyA7p8XwuBGRBO">
            Building Multilingual Apps - untyped podcast by Abdelrahman Awad
          </a>
        </p>
      </div> */}

      {/* <div>
        <p className="heading">
          One language text
          <span>=&gt;</span>
        </p>
        <p>{t("arabicOnly", { lng: "ar" })}</p>
      </div> */}

      {/* <div>
        <p className="heading">
          Multiple name spaces & Debugging Option
          <span>=&gt;</span>
        </p>
        <p>{t("extra", { ns: "extraNs" })}</p>
        <p>{t("does_not_exist", { ns: "extraNs" })}</p>
      </div> */}

      <div>
        <p className="heading">
          Nesting
          <span>=&gt;</span>
        </p>
        <p>{t("developer.bug", { bug: "Bug" })}</p>
        <p>{t("entomologist.bug", { bug: "Bug" })}</p>
      </div>
    </div>
  );
}

export default App;

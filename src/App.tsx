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

      {/* <div>
        <p className="heading">
          Nesting
          <span>=&gt;</span>
        </p>
        <p>{t("developer.bug", { bug: "Bug" })}</p>
        <p>{t("entomologist.bug", { bug: "Bug" })}</p>
      </div> */}

      {/* <div>
        <p className="heading">
          Context
          <span>=&gt;</span>
        </p>
        <p>{t("bug", { context: "developer", bug: "Bug" })}</p>
        <p>{t("bug", { context: "entomologist", bug: "Bug" })}</p>
      </div> */}

      {/* <div>
        <p className="heading">
          Pluralization
          <span>=&gt;</span>
        </p>

        <p>{t("ball", { count: 0 })}</p>
        <p>{t("ball", { count: 1 })}</p>
        <p>{t("ball", { count: 2 })}</p>
        <p>{t("ball", { count: 5 })}</p>
        <p>{t("ball", { count: 11 })}</p>
      </div> */}

      <div>
        <p className="heading">
          Formatting numbers, currency & time
          <span>=&gt;</span>
        </p>
        <p>
          {t("formattedNumber", {
            number: 12345.6789,
            minimumFractionDigits: 5,
          })}
        </p>
        <p>
          {t("formattedNumber", {
            number: 12345.6789,
            formatParams: {
              number: {
                maximumFractionDigits: 3,
              },
            },
          })}
        </p>

        <p>{t("formattedCurrency", { amount: 123344556 })}</p>
        <p>{t("formattedDate", { date: new Date() })}</p>
        <p>
          {t("formattedTime", {
            time: new Date(),
            formatParams: {
              time: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              },
            },
          })}
        </p>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <Weather />
        <footer className="footer">
          <a
            href="https://github.com/LenaUshakova/React-weather-app"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Open-source code
          </a>
          {", "}by{" "}
          <a
            href="https://www.linkedin.com/in/lena-ushakova/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Olena Ushakova
          </a>
        </footer>
      </div>
    </div>
  );
}

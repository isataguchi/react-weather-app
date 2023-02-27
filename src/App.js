import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <p className="footer">
            {" "}
            🌟 Coded by Isadora and is open-sourced on{" "}
            <a
              href="https://github.com/isataguchi/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

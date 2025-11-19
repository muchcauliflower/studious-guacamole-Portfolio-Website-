import "bootstrap/dist/css/bootstrap.min.css";
import "./css/colors.css";
import "./css/layout.css";
import TypeWriterEffect from "./components/TypeWriterEffect";

function App() {
  return (
    <div className="homepage">
      {/* main section */}
      <div>
        <header className="topbar">
          <div className="col-sm-8 p-1">
            <h1 className="IndexFont">
              Much<span className="highlight-green">Cauliflower</span>
            </h1>
          </div>
          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col">
                <h2>About</h2>
              </div>
              <div className="col">
                <h2>Projects</h2>
              </div>
              <div className="col">
                <h2>Contact</h2>
              </div>
            </div>
          </div>
        </header>

        <main>
          <h1 className="title">
            Hello,
            <br /> I am{" "}
            <span className="highlight-animated-green">Mikhail</span>,
            <br /> Aspiring <TypeWriterEffect />
          </h1>
        </main>

        {/* skillset section */}
        {/* <div className="skillset-section"></div> */}
      </div>
    </div>
  );
}

export default App;

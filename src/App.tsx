import TypeWriterEffect from "./components/TypeWriterEffect";
import RotatingText from "./components/RotatingText/RotatingText";
import RotatingTextFunction from "./components/RotatingText/RotatingTextFunction";
import StarBorder from "./components/StarBorder/StarBorder";

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
                <h3>About</h3>
              </div>
              <div className="col">
                <h3>Projects</h3>
              </div>
              <div className="col">
                <h3>Contact</h3>
              </div>
            </div>
          </div>
        </header>

        <main>
          <h1 className="title">
            Hello,
            <br /> I am{" "}
            <span className="highlight-animated-green">Mikhail</span>,
            <br /> Aspiring{""}
            <br />
            <RotatingTextFunction />
          </h1>
          <p className="subtitle">
            Currently Located in Philippines. Driven by{" "}
            <span className="paragraph-highlight">Back-End development</span>,
            and currently{" "}
            <span className="paragraph-highlight">
              leaning into Front-End development
            </span>{" "}
            to round out my Full-Stack abilities!
          </p>
          <StarBorder
            as="button"
            className="custom-class"
            color="rgb(29, 255, 153)"
            speed="2s"
          >
            Let's get in touch!
          </StarBorder>
        </main>

        {/* skillset section */}
        {/* <div className="skillset-section"></div> */}
      </div>
    </div>
  );
}

export default App;

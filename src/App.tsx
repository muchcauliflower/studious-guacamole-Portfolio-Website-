import HomePageMainComponent from "./components/HomePageMain/HomePageMainComponent";
import TopBar from "./components/TopBar/TopBar";
import { SkillSetComponent } from "./components/HomePageSkillSetSection/SkillSetComponent";

function App() {
  return (
    <div className="homepage">
      <div>
        <TopBar />
        <HomePageMainComponent />
        <SkillSetComponent />

        {/* <div className="skillset-section"></div> */}
      </div>
    </div>
  );
}

export default App;

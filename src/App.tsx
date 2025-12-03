import HomePageMainComponent from "./components/Sections/HomePageMainSection/HomePageMainComponent";
import { SkillSetComponent } from "./components/Sections/HomePageSkillSetSection/SkillSetComponent";
import TopBar from "./components/HardCoded/TopBar/TopBar";
import Aurora from "./components/ReactBitsLibrary/Aurora/Aurora";
import { LoopingIcons } from "./components/HardCoded/LoopingText/LoopingIcons";
import LogoDisplay from "./components/HardCoded/LogoDisplay/LogoDisplay";

function App() {
  return (
    <div className="homepage">
      <TopBar />
      <HomePageMainComponent />
      <SkillSetComponent />
      <div className="LanguagesAndToolsSection">
        <Aurora
          colorStops={["#028f62", "#028f62", "#028f62"]}
          blend={0.5}
          amplitude={2.0}
          speed={0.5}
        />
      </div>
      <div className="LanguagesAndToolsSectionContainer">
        <div className="LanguagesAndToolsSectionContents">
          <LogoDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;

import CardContainer from "../CardContainer/CardContainer";

export const SkillSetComponent = () => {
  return (
    <main>
      <div className="skillset-container">
        <div className="skillset-section">
          Relevant Skill-Set
          <div className="grid-container">
            <CardContainer
              iconSrc="public\icons\IconSvg_DataBase.svg"
              title="Database Management"
              description="Exposed with SQL Server (SSMS), Firebase Firestore/Realtime Database, and Azure Blob Storage, Data Warehousing and Loading"
            />
            <CardContainer
              iconSrc="public\icons\iconSvg_PhoneCameraZoom.svg"
              title="Mobile App Development"
              description="Created Projects with the Flutter Framework, utilizing Dart language for cross-platform mobile applications"
            />
            <CardContainer
              iconSrc="public\icons\WebDevelopment.svg"
              title="Web Development"
              description="Familiar with simple HTML, CSS, Javascript, TS for Web Development."
            />
          </div>
          <div className="grid-container">
            <CardContainer
              iconSrc="public\icons\iconSvg_DataWrangling.svg"
              title="Data Engineering"
              description="Knowledgeable in the creation of ETL/ELT Pipelines, and exposure to services that surround it."
            />
            <CardContainer
              iconSrc="public\icons\iconSvg_MonitorCloud.svg"
              title="Cloud Computing"
              description="Experience in the usage and deployment of services through Microsoft Azure."
            />
            <CardContainer
              iconSrc="public\icons\iconSvg_UiDesignTools.svg"
              title="UI/UX Desing"
              description="Able to create simple UI/UX Designs in Figma."
            />
          </div>
        </div>
      </div>
    </main>
  );
};

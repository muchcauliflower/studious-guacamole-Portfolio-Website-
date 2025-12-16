import RespondrComponent from "./components/ProjectsPageComponents/RespondrComponent";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen">
      <RespondrComponent />
      <div className="mapakaon-tile-background text-black !h-auto">
        <div className="mt-16 grid grid-cols-3 gap-1 px-[10rem] py-4 mb-16">
          {/* Left column (2/3 width) */}
          <div className="p-1 col-span-2 flex flex-col items-start justify-center gap-2">
            <h1 className="text-2xl font-bold">MAPAKaon</h1>
            <p className="text-justify w-full">
              A web-based application for local food vendors with transportation
              routing and guiding in Iloilo City.
            </p>
          </div>

          {/* Right column (1/3 width) */}
          <div className="p-5 flex items-center justify-center text-center">
            <img
              src="/ScreenShots/MAPAKaon/MAPAKaonLogo.png"
              alt="MAPAKaon Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* New row spanning all columns */}
          <div className="p-1 col-span-3 text-justify">
            MAPAKaon is a companion app developed as part of a capstone project
            for the Bachelor of Science in Computer Science. It is designed to
            help users discover nearby restaurants, access their menus and
            vendor information, and navigate to vendors efficiently with
            accurate location and route guidance.
            <br />
            <br />
            MAPAKaon would feature geolocation-based vendor discovery, verified
            restaurant profiles with essential details such as a restaurants'
            menu and operating hours. And detailed commuting guides which would
            include a visual guide on where to go to board, and alight to reach
            a desired restaurant or vendor and a step-by-step process on how to
            get there.
          </div>
          <div className="p-1 col-span-3 text-justify">
            Role in the project:
            <br />
            Group Leader
            <br />
            Lead Programmer:
            <ul className="list-disc pl-6 space-y-2">
              <li className="pl-4">
                Created the Routing Algorithm for routing guide
              </li>
              <li className="pl-4">
                Created route editor to be able to create and edit routes
              </li>
              <li className="pl-4">
                UI for step-by-step guide and visual for routes Made the
                Homepage for the app
              </li>
            </ul>
          </div>

          {/* Screenshots Section with Photo Grid */}
          <div className="p-1 col-span-3">
            <h3 className="text-lg font-bold mb-4">Screenshots:</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Top Left - Landscape1 (spans 2 cols, 1 row) */}
              <div className="col-span-2 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="/ScreenShots/MAPAKaon/Landscape1.png"
                  alt="MAPAKaon Homepage with Hot Deals"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right - Portrait1 (spans 2 cols, 2 rows) */}
              <div className="col-span-2 row-span-2 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="/ScreenShots/MAPAKaon/Portrait1.png"
                  alt="MAPAKaon Map View with Route"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle Left - Landscape2 (spans 2 cols, 1 row) */}
              <div className="col-span-2 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="/ScreenShots/MAPAKaon/Landscape2.png"
                  alt="MAPAKaon Dark Mode Map"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom - Landscape3 (spans 4 cols, 1 row) - BIGGEST */}
              <div className="col-span-4 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="/ScreenShots/MAPAKaon/Landscape3.png"
                  alt="MAPAKaon Turn-by-Turn Directions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

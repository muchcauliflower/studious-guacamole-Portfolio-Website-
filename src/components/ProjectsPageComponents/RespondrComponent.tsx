function RespondrComponent() {
  return (
    <div className="respondr-tile relative">
      {/* Background */}
      <div className="respondr-tile-background absolute inset-0" />

      {/* Main Content */}
      <div className="relative z-10 px-[10rem] pt-8">
        <div className="flex h-[15rem] w-full gap-8">
          {/* Left Column - Logo */}
          <div className="w-[230px] flex-shrink-0 flex justify-center items-center">
            <img
              width={230}
              height="auto"
              src="/ProjectsAssets/reponsdrIcon.svg"
              alt="RESPONDr Logo"
            />
          </div>

          {/* Right Column - Title and Description */}
          <div className="flex-1 flex items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">RESPONDr.</h1>
              <p className="text-[20px] text-justify">
                Prototype app designed to standardize and streamline
                communication between users and emergency services within towns
                and provinces in Iloilo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="px-[10rem] mt-8 text-[20px] text-justify">
        Originally pitched at Central Launch: Student-led Startup Bootcamp held
        by CPU. RESPONDr. is an app to tackle the issues and problems faced by
        many Filipinos in emergent situations. Despite being educated about
        handling situations and who to contact, not everyone knows the
        appropriate authorities to contact. Many tend to default to calling the
        general number 911. While this is helpful, it often causes delays due to
        call transfers for location and emergency details. Such time losses
        could result in loss of lives that could have been prevented if help
        arrived sooner. The app focuses on creating a standardized and
        streamlined communication between users and their local emergency
        services, removing the excess time from calling the general branch and
        straight to the source of service that can provide aid.
      </div>

      {/* Screenshots Section */}
      <div className="px-[10rem] mt-8 pb-8">
        <h2 className="text-2xl font-semibold mb-4">Screenshots:</h2>
        <div className="flex gap-6 overflow-x-auto items-center">
          {[
            "/ScreenShots/Respondr Screenshots/Home respondr.png",
            "/ScreenShots/Respondr Screenshots/Home.png",
            "/ScreenShots/Respondr Screenshots/login.png",
            "/ScreenShots/Respondr Screenshots/Respondr Home.png",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="w-[220px] h-[420px] object-cover flex-shrink-0 rounded-lg border"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RespondrComponent;

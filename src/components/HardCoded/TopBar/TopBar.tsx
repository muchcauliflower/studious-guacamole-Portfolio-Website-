import PopUpNav from "../PopupNav/PopupNav";

function TopBar() {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <div>
      <header className="topbar">
        <div className="col-sm-9 p-1">
          <h1 className="IndexFont">
            Much<span className="highlight-green">Cauliflower</span>
          </h1>
        </div>
        <h4 className="nav-links">
          <PopUpNav items={items} initialActiveIndex={0} animationTime={600} />
        </h4>
      </header>
    </div>
  );
}

export default TopBar;

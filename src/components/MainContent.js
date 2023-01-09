import Gallery from "./Gallery";
import Overview from "./Overview";
import Detail from "./Detail";

function MainContent() {
  return (
    <>
      <main className="hotel-view">
        <Gallery />
        <Overview />
        <Detail />
      </main>
    </>
  );
}

export default MainContent;

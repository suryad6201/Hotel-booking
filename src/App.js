import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div class="container">
      <Header />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

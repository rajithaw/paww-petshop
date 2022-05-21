import "./App.css";

import LeftNavigation from "./layout/LeftNavigation";
import BottomNavigation from "./layout/BottomNavigation";
import MainHeader from "./layout/MainHeader";
import RightNavigation from "./layout/RightNavigation";
import MainContent from "./layout/MainContent";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <MainContent />
      <LeftNavigation />
      <RightNavigation />
      <BottomNavigation />
    </div>
  );
}

export default App;

import './App.css';
import List from "./components/List";
import Scan from "./components/Scan";
import DownloadState from "./components/Download-state";

function App() {

  return (
    <div className="App">
        <List/>
        <Scan/>
        <DownloadState/>
    </div>
  );
}

export default App;

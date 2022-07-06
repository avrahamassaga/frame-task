// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import FrameBox from './Components/FrameBox/FrameBox';
import FrameBar from './Components/FramesList/FrameBar';
function App() {
  const [SelectedFrame, setSelectedFrame] = useState(null)
  return (
    <div className="App">
      <FrameBox SelectedFrame={SelectedFrame}/>
      <FrameBar selectFrame={setSelectedFrame}/>
    </div>
  );
}

export default App;

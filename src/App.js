// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import SizeControl from './Components/AvatarSizeControl/SizeControl';
import FrameBox from './Components/FrameBox/FrameBox';
import FrameBar from './Components/FramesList/FrameBar';
import Logo from './Components/Logo/Logo';
function App() {
  const [SelectedFrame, setSelectedFrame] = useState(null)
  const [imgSize, setImgSize] = useState(150);
  return (
    <div className="App">
      <Logo/>
      <FrameBox SelectedFrame={SelectedFrame} imgSize={imgSize} />
      <SizeControl imgSize={imgSize} setImgSize={setImgSize}/>
      <FrameBar selectFrame={setSelectedFrame} imgSize={imgSize} />
    </div>
  );
}

export default App;

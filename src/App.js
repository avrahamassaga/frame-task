// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import SizeControl from './Components/AvatarSizeControl/SizeControl';
import FrameBox from './Components/FrameBox/FrameBox';
import FrameBar from './Components/FramesList/FrameBar';
import Logo from './Components/Logo/Logo';
import Upload from './Components/UploadImg/Upload';
import profile from "./assets/profile/profile.jpg"
function App() {
  const [SelectedFrame, setSelectedFrame] = useState(null)
  const [imgSize, setImgSize] = useState(150);
  const [avataeImg, setAvataeImg] = useState(profile)
  return (
    <div className="App">
      <Logo/>
      <FrameBox SelectedFrame={SelectedFrame} imgSize={imgSize} avatarImg={avataeImg}/>
      <SizeControl imgSize={imgSize} setImgSize={setImgSize}/>
      <Upload setAvatar={setAvataeImg}/>
      <FrameBar selectFrame={setSelectedFrame} imgSize={imgSize} />
    </div>
  );
}

export default App;

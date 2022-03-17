import "./App.scss";
import { ImageProfile } from "./componets/atoms/Image/ImageProfile";

import profilePhoto from './mock/img/man.jpeg'
function App() {
  return (
    <div className="App">
      <ImageProfile src={profilePhoto} alt={'Imagen de perfil'}/>
    </div>
  );
}

export default App;

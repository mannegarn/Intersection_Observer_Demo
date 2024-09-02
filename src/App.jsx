import { useState } from "react";
import Header from "./Components/Header/Header";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import "./App.css";
function App() {
  const [imageCount, setImageCount] = useState(50);

  const handleImageCountChange = (newCount) => {
    setImageCount(newCount);
  };

  return (
    <div>
      <Header
        imageCount={imageCount}
        onImageCountChange={handleImageCountChange}
      />
      <ImageContainer imageCount={imageCount} />
    </div>
  );
}

export default App;

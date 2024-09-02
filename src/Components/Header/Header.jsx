import { useState } from "react";
import "./Header.css";

export default function Header({ imageCount, onImageCountChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newImageCount, setNewImageCount] = useState(imageCount);

  const handleImageCountClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setNewImageCount(parseInt(event.target.value) || 0);
  };

  const handleInputBlur = () => {
    onImageCountChange(newImageCount);
    setIsEditing(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onImageCountChange(newImageCount);
      setIsEditing(false);
    }
  };

  return (
    <header>
      <h1>
        This Page Has
        {isEditing ? (
          <input
            type="number"
            value={newImageCount}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyPress={handleKeyPress}
            autoFocus
          />
        ) : (
          <span onClick={handleImageCountClick} style={{ cursor: "pointer" }}>
            {imageCount}
          </span>
        )}
        Images
      </h1>
    </header>
  );
}

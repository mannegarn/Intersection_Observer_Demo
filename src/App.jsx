import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import "./App.css";

const defaultIntObv = false;
const defaultImageCount = 10;
const imageURLs = [
  "https://storage.googleapis.com/photos_website_demo/20230325_063151.jpg",
  "https://storage.googleapis.com/photos_website_demo/20230325_065200.jpg",
  "https://storage.googleapis.com/photos_website_demo/20230325_071022.jpg",
  "https://storage.googleapis.com/photos_website_demo/20230325_071646.jpg",
  "https://storage.googleapis.com/photos_website_demo/20230325_092629.jpg",
  "https://storage.googleapis.com/photos_website_demo/20230325_093241.jpg",
  "https://storage.googleapis.com/photos_website_demo/20230325_131009.jpg",
  "https://storage.googleapis.com/photos_website_demo/20230325_131038.jpg",
  "https://storage.googleapis.com/photos_website_demo/20230325_131043.jpg",
  "https://storage.googleapis.com/photos_website_demo/20230325_154836.jpg",
  "https://storage.googleapis.com/photos_website_demo/20230325_163349.jpg",
  "https://storage.googleapis.com/photos_website_demo/20230327_105826.jpg",
  "https://storage.googleapis.com/photos_website_demo/CSC_9854.jpg",
  "https://storage.googleapis.com/photos_website_demo/DSC_9390.jpg",
  "https://storage.googleapis.com/photos_website_demo/DSC_9404.jpg",
  "https://storage.googleapis.com/photos_website_demo/DSC_9439-02.jpg",
  "https://storage.googleapis.com/photos_website_demo/InCollage_20230422_143920839.jpg",
  "https://storage.googleapis.com/photos_website_demo/InCollage_20230422_144006841.jpg",
];

export default function App() {
  const [intObv, setIntObv] = useState(() => {
    const savedIntObv = localStorage.getItem("intObv");
    return savedIntObv !== null ? JSON.parse(savedIntObv) : defaultIntObv;
  });

  const [imageCount, setImageCount] = useState(() => {
    const storedImageCount = localStorage.getItem("imageCount");
    return storedImageCount ? parseInt(storedImageCount) : defaultImageCount;
  });

  useEffect(() => {
    localStorage.setItem("imageCount", imageCount);
  }, [imageCount]);

  useEffect(() => {
    localStorage.setItem("intObv", JSON.stringify(intObv));
    console.log(
      intObv
        ? "Intersection Observer enabled!"
        : "Intersection Observer disabled!"
    );
  }, [intObv]);

  const handleToggleIntObv = (isEnabled) => {
    setIntObv(isEnabled);
  };

  return (
    <div>
      <Header
        imageCount={imageCount}
        onImageCountChange={setImageCount}
        onIntObvChange={handleToggleIntObv}
        intObv={intObv}
      />
      <ImageContainer
        imageCount={imageCount}
        imageURLs={imageURLs}
        intObv={intObv}
      />
    </div>
  );
}

import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import "./App.css";

const defaultIntObv = false;
const defaultImageCount = 10;
const imageURLs = [
  "https://images.pexels.com/photos/3389817/pexels-photo-3389817.jpeg?cs=srgb&dl=pexels-airamdphoto-3389817.jpg&fm=jpg&w=1920&h=2880&_gl=1*6jb3ba*_ga*MTM4ODAxMjk0Ny4xNzIwMTg5NjEy*_ga_8JE65Q40S6*MTcyNTM1NjY4Ny4yLjEuMTcyNTM1NzQ2NS4wLjAuMA..",
  "https://images.pexels.com/photos/2128042/pexels-photo-2128042.jpeg?cs=srgb&dl=pexels-ethan-brooke-1123775-2128042.jpg&fm=jpg&w=3072&h=3840&_gl=1*tv9d7z*_ga*MTM4ODAxMjk0Ny4xNzIwMTg5NjEy*_ga_8JE65Q40S6*MTcyNTM1NjY4Ny4yLjEuMTcyNTM1NzQzOS4wLjAuMA..",
  "https://images.pexels.com/photos/27833895/pexels-photo-27833895.jpeg?cs=srgb&dl=pexels-ahmed-fahmy-1654571123-27833895.jpg&fm=jpg&w=4000&h=6000&_gl=1*miuzfq*_ga*MTM4ODAxMjk0Ny4xNzIwMTg5NjEy*_ga_8JE65Q40S6*MTcyNTM1NjY4Ny4yLjEuMTcyNTM1NzM5My4wLjAuMA..",
  "https://images.pexels.com/photos/12521190/pexels-photo-12521190.jpeg?cs=srgb&dl=pexels-dennisariel-12521190.jpg&fm=jpg&w=4528&h=2882&_gl=1*l8w6s3*_ga*MTM4ODAxMjk0Ny4xNzIwMTg5NjEy*_ga_8JE65Q40S6*MTcyNTM1NjY4Ny4yLjEuMTcyNTM1NzM7NC4wLjAuMA..",
  "https://images.pexels.com/photos/28173267/pexels-photo-28173267.jpeg?cs=srgb&dl=pexels-hudson-mcdonald-692563691-28173267.jpg&fm=jpg&w=4329&h=6494&_gl=1*u5lgpt*_ga*MTM4ODAxMjk0Ny4xNzIwMTg5NjEy*_ga_8JE65Q40S6*MTcyNTM1NjY4Ny4yLjEuMTcyNTM1NzExNS4wLjAuMA..",
  "https://images.pexels.com/photos/27703471/pexels-photo-27703471.jpeg?cs=srgb&dl=pexels-marcus-silva-86421404-27703471.jpg&fm=jpg&w=4672&h=7008&_gl=1*1wvl1b3*_ga*MTM4ODAxMjk0Ny4xNzIwMTg5NjEy*_ga_8JE65Q40S6*MTcyNTM1NjY4Ny4yLjEuMTcyNTM1NzA9MS4wLjAuMA..",
  "https://images.pexels.com/photos/27546895/pexels-photo-27546895.jpeg?cs=srgb&dl=pexels-nikitapishchugin-27546895.jpg&fm=jpg&w=4008&h=6012&_gl=1*kxr1r5*_ga*MTM4ODAxMjk0Ny4xNzIwMTg5NjEy*_ga_8JE65Q40S6*MTcyNTM1NjY4Ny4yLjEuMTcyNTM1NzA3Ny4wLjAuMA..",
  "https://images.pexels.com/photos/27367377/pexels-photo-27367377.jpeg?cs=srgb&dl=pexels-luciana-evrard-1458998685-27367377.jpg&fm=jpg&w=5031&h=7543&_gl=1*q0vijb*_ga*MTM4ODAxMjk0Ny4xNzIwMTg5NjEy*_ga_8JE65Q40S6*MTcyNTM1NjY4Ny4yLjEuMTcyNTM1NjkzMS4wLjAuMA..",
  "https://images.pexels.com/photos/27560339/pexels-photo-27560339.jpeg?cs=srgb&dl=pexels-ekam-juneja-61080223-27560339.jpg&fm=jpg&w=5152&h=7728&_gl=1*1qofe9n*_ga*MTM4ODAxMjk0Ny4xNzIwMTg5NjEy*_ga_8JE65Q40S6*MTcyNTM1NjY4Ny4yLjEuMTcyNTM1NzA1Ni4wLjAuMA..",
  "https://images.pexels.com/photos/27402083/pexels-photo-27402083.jpeg?cs=srgb&dl=pexels-mariya-klyachko-1585911434-27402083.jpg&fm=jpg&w=4480&h=6720&_gl=1*1wb0u6h*_ga*MTM4ODAxMjk0Ny4xNzIwMTg5NjEy*_ga_8JE65Q40S6*MTcyNTM1NjY4Ny4yLjEuMTcyNTM1NzA7MC4wLjAuMA..",
  "https://images.pexels.com/photos/27367001/pexels-photo-27367001.jpeg?cs=srgb&dl=pexels-thomas-parker-1272388137-27367001.jpg&fm=jpg&w=3469&h=2478&_gl=1*14nkq7p*_ga*MTM4ODAxMjk0Ny4xNzIwMTg5NjEy*_ga_8JE65Q40S6*MTcyNTM1NjY4Ny4yLjEuMTcyNTM1NzA0Ny4wLjAuMA..",
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

import { useEffect, useRef, useState } from "react";
import "./ImageContainer.css";

export default function ImageContainer({ imageCount, imageURLs, intObv }) {
  const [randomisedURLs, setRandomisedURLs] = useState([]);
  const [loadedImages, setLoadedImages] = useState(
    new Array(imageCount).fill(false)
  );
  const observer = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const generateRandomUrls = () => {
      const shuffledURLs = [];
      for (let i = 0; i < imageCount; i++) {
        const randomIndex = Math.floor(Math.random() * imageURLs.length);
        shuffledURLs.push(imageURLs[randomIndex]);
      }
      setRandomisedURLs(shuffledURLs);
      setLoadedImages(new Array(shuffledURLs.length).fill(false));
    };

    generateRandomUrls();
  }, [imageURLs, imageCount]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: intObv
        ? "-50px"
        : document.documentElement.scrollHeight + "px",
      threshold: 0.5,
    };

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imgIndex = entry.target.getAttribute("data-index");
          setLoadedImages((prev) => {
            const updatedLoadedImages = [...prev];
            updatedLoadedImages[imgIndex] = true;
            return updatedLoadedImages;
          });
          observer.current.unobserve(entry.target);
        }
      });
    }, options);

    imageRefs.current.forEach((img) => {
      if (img) {
        observer.current.observe(img);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [randomisedURLs]);

  const imageElements = randomisedURLs.map((url, i) => {
    const isLoaded = loadedImages[i];

    return (
      <div
        key={i}
        className={`image-wrapper ${isLoaded ? "loaded" : ""}`}
        ref={(el) => (imageRefs.current[i] = el)}
        data-index={i}
      >
        <p className="image-number">{i + 1}</p>
        {isLoaded ? (
          <img src={url} alt={`Random image ${i + 1}`} />
        ) : (
          <div className="placeholder" />
        )}
      </div>
    );
  });

  return <div className="image-container">{imageElements}</div>;
}

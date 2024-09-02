import "./ImageContainer.css";

export default function ImageContainer({ imageCount }) {
  const imageElements = [];

  for (let i = 0; i < imageCount; i++) {
    imageElements.push(
      <div className="image-wrapper">
        <p className="image-number">{i})</p>
        <img src={`https://picsum.photos/2000/2000?random=${i}`} />
      </div>
    );
  }

  return <div className="image-container">{imageElements}</div>;
}

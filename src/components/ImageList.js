import "./imageList.css"

const ImageList = ({ images }) => {
  return (
      <div className="images">
        {images.map((image) => {
          return (
              <img
                key={image.id}
                className="img"
                src={image.urls.small}
                alt={image.alt_description}
              />
          );
        })}
      </div>
  );
};

export default ImageList;

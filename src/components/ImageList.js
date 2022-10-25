

import Stack from "@mui/material/Stack";
import "./imageList.css"

const ImageList = ({ images }) => {
  return (
    <Stack spacing={2}>
      <div className="images">
        {images.map((image) => {
          return (
            <div key={image.id}>
              <img
                className="img"
                src={image.urls.small}
                alt={image.alt_description}
              />
            </div>
          );
        })}
      </div>
     
      
    
    </Stack>
  );
};

export default ImageList;

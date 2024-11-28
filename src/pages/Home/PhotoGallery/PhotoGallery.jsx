import SectionTitle from "@/components/common/SectionTitle";
import { photos } from "@/data/photos";
// import { Gallery } from "react-grid-gallery";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const PhotoGallery = () => {
  return (
    <section className="container mx-auto px-3 my-8">
      <SectionTitle
        heading=" Photo Album "
        subHeading="A curated collection of stunning visuals that tell a story."
      ></SectionTitle>
      <div className="photo-gallery">
        <PhotoProvider>
          <div
            className="masonry-layout"
            style={{
              columnCount: 6,
              columnGap: "5px",
            }}
          >
            {photos.map((item, index) => (
              <PhotoView key={index} src={item.src}>
                <img
                  src={item.src}
                  alt={`Image ${index}`}
                  style={{
                    width: "100%",
                    marginBottom: "10px",
                    cursor: "pointer",
                    display: "block",
                    borderRadius: "5px",
                  }}
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>

      {/* <div className="">
        <Gallery images={photos} />
      </div> */}
    </section>
  );
};

export default PhotoGallery;
